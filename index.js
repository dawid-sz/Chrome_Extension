let myLeads = []
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.querySelector("#save-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
};

const tabs = [
    {url: "link to the profile"}
];

tabBtn.addEventListener("click", function() {
    console.log(tabs[0].url)
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) ) //Turning array into a string to safe input into the local storage
    render(myLeads);
});

// creating a function to wrap the whole code and put it into inputBtn function
function render(leads) { //creating a parameter leads for the function
    let listItems = "" // <- creating a "let" variable (because it will be reassigned), listItems, to hold all the HTML for the list items
                       // assigning it to an empty string to begin with
    for (let i = 0; i < leads.length; i++) {
        //adding items to the listItems to increase performance of the code
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // assigning the listItems variable to the ulEl innerHTML
    ulEl.innerHTML = listItems  
};