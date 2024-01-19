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

# The rest of your code remains unchanged
