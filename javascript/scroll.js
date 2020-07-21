const introLink = document.getElementById("introLink");
const skillsLink = document.getElementById("skillLink");
const portLink = document.getElementById("portLink");
const contactLink = document.getElementById("contactLink")

const intro = document.getElementById("intro")
const skills = document.getElementById("skills")
const portfolio = document.getElementById("portfolio")
const contact = document.getElementById("contact")


console.log("this is happening")

introLink.onclick = function(){
   intro.scrollIntoView()
   console.log("this was clicked") 
}

skillsLink.onclick = function(){
    skills.scrollIntoView()
    console.log("this was clicked") 
}
portLink.onclick = function(){
    portfolio.scrollIntoView()
}
contactLink.onclick = function(){
    contact.scrollIntoView()
}


$(document).ready(function(){
    $("#emailPopover").popover();
})