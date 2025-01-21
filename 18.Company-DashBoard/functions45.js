 
const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")
const sideNavBar = document.querySelector(".sidenav")
const mainsection  = document.querySelectorAll(".main .section"); /// Use querySelectorAll for multiple elements
const loginButton = document.getElementById("loginBtn");
const loginModal  = document.getElementById("loginSection");


loginButton.onclick = showLogin;//
function showLogin() {
    sideNavBar.style.display = "none";
    mainsection.forEach(function(item) { // Corrected to forEach
        item.style.display = "none";
    });
    loginModal.style.display = "block"; // Ensure the login modal is displayed
}

document.getElementById('closeBtn').addEventListener('click', hidelog);
function hidelog() {
    sideNavBar.style.display = "block";
    mainsection.forEach(function(item) { // Corrected to forEach
        item.style.display = "block";
    });
    loginModal.style.display = "none"; // Hide the login model
}                              
                                
closeNav.addEventListener('click', closeSideNavBar)
function closeSideNavBar() {
    sideNavBar.classList.toggle("mango")
}

document.getElementById('loginSubmit').addEventListener('mouseover', function(){
    this.style.backgroundColor = "Green"
})

document.getElementById('loginSubmit').addEventListener('mouseout', function(){
    this.style.backgroundColor = "Red"
})


const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC" 
}

function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}