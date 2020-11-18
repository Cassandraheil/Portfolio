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


// poppover i might use in the future
// $(document).ready(function(){
//     $("#emailPopover").popover();
// })


// Call/put away Le Modal
var modal = document.getElementById("emailModal");
var btn = document.getElementById("emailModalBtn");
var span = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
    console.log("email btn clicked")
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}