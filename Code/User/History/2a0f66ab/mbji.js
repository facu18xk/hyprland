//Distance: url downloads plans
const PLANS = {
    "5k_run": "https://www.nike.com/pdf/Nike-Run-Club-5K-Training-Plan-Audio-Guided-Runs.pdf",
    "10k_run": "https://www.nike.com/pdf/Nike-Run-Club-10K-Training-Plan-Audio-Guided-Runs.pdf",
    "Half_marathon": "https://www.nike.com/pdf/Nike-Run-Club-Half-Marathon-Training-Plan-Audio-Guided-Runs.pdf",
    "Marathon": "https://www.nike.com/pdf/Nike-Run-Club-Marathon-Training-Plan-Audio-Guided-Runs.pdf"
}
//By default the active distance is 5k, 0 is because is the first item in the object
let activeDistance = 0;
const keys = Object.keys(plans);
// Render user desire distance
//select the distances buttons
let distances = document.querySelectorAll(".plan");
let distancesContainer = document.querySelector(".plans")

// Add and remove active element
const active = (clickedElement) => {
    distances[clickedElement].classList.add("plan--active");
    distances[activeDistance].classList.remove("plan--active");
    activeDistance = clickedElement;
}

//Add event listeners 

//Change 3d distance text
//Change css class for active distance
//Change description data fetched from wikipedia
//CHange download link plan
