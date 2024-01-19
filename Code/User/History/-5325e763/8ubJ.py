# ┌────────────────────────────────────────────────────────────────────────┐
# │ InstaBot - Python Selenium Bot                                         │
# ├────────────────────────────────────────────────────────────────────────┤
# │ Copyright © 2019 Joseph Pereniguez                                     |
# | (https://github.com/Estayparadox/InstaBot)                             │
# ├────────────────────────────────────────────────────────────────────────┤
# │ Licensed under the MIT                                                 |
# | (https://github.com/Estayparadox/InstaBot/blob/master/LICENSE) license.│
# └────────────────────────────────────────────────────────────────────────┘

import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from time import sleep, strftime
from random import randint
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

#for firefoxdriver
from selenium.webdriver.firefox.options import Options

options = Options()

webdriver_path = '/usr/bin/geckodriver'
service = Service(executable_path=webdriver_path)
webdriver = webdriver.Firefox(service=service, options=options)
# #for chromedriver
# chromedriver_path ='/Users/joseph/Projects/Insta-Bot/src/chromedriver' # Change this to your own chromedriver path!
# service = Service(executable_path=chromedriver_path)
# options = webdriver.ChromeOptions()
# webdriver = webdriver.Chrome(service=service, options=options)

sleep(5)
webdriver.get('https://www.instagram.com/accounts/login/')

# Skip the cookie banner
try:
    button_login = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/button[1]'))
    )
    button_login.click()
except Exception as e:
    print(f"Error clicking login button: {e}")

# Setup credentials
account_name = "thinkdiff.py"  # Change this to your own Instagram username
account_password = "facuybenja"  # Change this to your own Instagram password

# Email & Password inputs
try:
    username = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div/div[1]/div/label/input'))
    )
    username.send_keys(account_name)
except Exception as e:
    print(f"Error entering username: {e}")

try:
    password = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div/div[2]/div/label/input'))
    )
    password.send_keys(account_password)
except Exception as e:
    print(f"Error entering password: {e}")

# Login
try:
    button_login = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//html/body/div[2]/div/div/div[2]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div/div[3]/button'))
    )
    button_login.click()
except Exception as e:
    print(f"Error clicking login button: {e}")

# Replace sleep(3) with an explicit wait
try:
    WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/button[1]'))
    )
    button_login = webdriver.find_element(By.XPATH, '/html/body/div[2]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/button[1]')
    button_login.click()
except Exception as e:
    print(f"Error clicking login button: {e}")

# Optional save info popup
try:
    save_info = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/section/main/div/div/div/div/div'))
    )
    save_info.click()
except Exception as e:
    print(f"Error clicking save info popup: {e}")

# Optional notifications popup
try:
    notnow = WebDriverWait(webdriver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[3]/button[2]'))
    )
    notnow.click()
except Exception as e:
    print(f"Error clicking notifications popup: {e}")

hashtag_list = ['LaptopEnVenta',
                'ParaguayTecnológico',
                # ... (your other hashtags)
                'ComunidadTecnológicaParaguay']  # Change this to your own tags

prev_user_list = [] # If it's the first time you run it, use this line and comment the two below
# prev_user_list = pd.read_csv('20190604-224633_users_followed_list.csv', delimiter=',').iloc[:,1:2] # useful to build a user log
# prev_user_list = list(prev_user_list['0'])

new_followed = []
tag = -1
followed = 0
likes = 0
comments = 0

for hashtag in hashtag_list:
    tag += 1
    webdriver.get('https://www.instagram.com/explore/tags/'+ hashtag_list[tag] + '/')
    sleep(5)
    first_thumbnail = webdriver.find_element(By.XPATH, '//*[@id="react-root"]/section/main/article/div/div/div/div[1]/div[1]/a/div')

    first_thumbnail.click()
    sleep(randint(1,2))
    try:
        for x in range(1,200):
            username = webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/header/div[2]/div[1]/div[1]/h2/a').text
            if username not in prev_user_list:
                # If we already follow, do not unfollow
                if webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/header/div[2]/div[1]/div[2]/button').text == 'Follow' :
                    webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/header/div[2]/div[1]/div[2]/button').click()
                    new_followed.append(username)
                    followed += 1
                    # Liking the picture
                    button_like = webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/div[2]/section[1]/span[1]/button')
                    button_like.click()
                    likes += 1
                    sleep(randint(18,25))
                    # Comments and tracker
                    comm_prob = randint(1,10)
                    print('{}_{}: {}'.format(hashtag, x,comm_prob))
                    if comm_prob > 7:
                        comments += 1
                        webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/div[2]/section[1]/span[2]/button/span').click()
                        comment_box = webdriver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/article/div[2]/section[3]/div/form/textarea')
                        if comm_prob < 7:
                            comment_box.send_keys('Really cool!')
                            sleep(1)
                        elif (comm_prob > 6) and (comm_prob < 9):
                            comment_box.send_keys('Nice work :)')
                            sleep(1)
                        elif comm_prob == 9:
                            comment_box.send_keys('Nice gallery!!')
                            sleep(1)
                        elif comm_prob == 10:
                            comment_box.send_keys('So cool! :)')
                            sleep(1)
                        # Enter to post comment
                        comment_box.send_keys(Keys.ENTER)
                        sleep(randint(22, 28))
                # Next picture
                webdriver.find_element(By.LINK_TEXT, 'Next').click()
                sleep(randint(25, 29))
            else:
                webdriver.find_element(By.LINK_TEXT, 'Next').click()
                sleep(randint(20, 26))
    # Some hashtag stops refreshing photos (it may happen sometimes), it continues to the next
    except:
        continue

for n in range(0,len(new_followed)):
    prev_user_list.append(new_followed[n])

updated_user_df = pd.DataFrame(prev_user_list)
updated_user_df.to_csv('{}_users_followed_list.csv'.format(strftime("%Y%m%d-%H%M%S")))
print('Liked {} photos.'.format(likes))
print('Commented {} photos.'.format(comments))
print('Followed {} new people.'.format(followed))