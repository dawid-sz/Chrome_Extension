let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
});

// creating a function to wrap the whole code and put it into inputBtn function
function renderLeads() {
    let listItems = ""; // <- creating a "let" variable (because it will be reassigned), listItems, to hold all the HTML for the list items
                         // assigning it to an empty string to begin with
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a href='" + myLeads[i] + "'target='_blank'>" + myLeads[i] + "</a></li>" // <- adding items to the listItems to increase performance of the code
        listItems += `
            <li>
                <a href=${myLeads[i]} target='_blank'>${myLeads[i]}</a>
            </li>
            `
    }
    // assigning the listItems variable to the ulEl innerHTML
    ulEl.innerHTML = listItems
};