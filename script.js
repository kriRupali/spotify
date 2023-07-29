// Todo :  Hamberger
let hamberber = document.getElementsByClassName("hamberber");
let hamberber1 = hamberber[0];
let hamberber2 = hamberber[1];
let navMenu = document.querySelectorAll("header article main nav")[0];
hamberber1.addEventListener("click", (e) => {
  navMenu.style.bottom = "30vh";
  hamberber1.style.display = "none";
  hamberber2.style.display = "block";
});

hamberber2.addEventListener("click", (e) => {
  navMenu.style.bottom = "-50vh";
  hamberber2.style.display = "none";
  hamberber1.style.display = "block";
});

// Todo : Got Question
let arrow = document.getElementsByClassName("arrow");
let paragraph = document.querySelectorAll("#got_questions article main p");
console.log(paragraph);
console.log(arrow);

//! first
let uparrow1 = arrow[0];
let downarrow1 = arrow[1];

uparrow1.addEventListener("click", (e) => {
  uparrow1.style.display = "none";
  downarrow1.style.display = "block";
  paragraph[0].style.display = "none";
});

downarrow1.addEventListener("click", (e) => {
  uparrow1.style.display = "block";
  downarrow1.style.display = "none";
  paragraph[0].style.display = "block";
});

//! second
let uparrow2 = arrow[2];
let downarrow2 = arrow[3];

uparrow2.addEventListener("click", (e) => {
  uparrow2.style.display = "none";
  downarrow2.style.display = "block";
  paragraph[1].style.display = "none";
});
downarrow2.addEventListener("click", (e) => {
  uparrow2.style.display = "block";
  downarrow2.style.display = "none";
  paragraph[1].style.display = "block";
});

//! third
let uparrow3 = arrow[4];
let downarrow3 = arrow[5];

uparrow3.addEventListener("click", (e) => {
  uparrow3.style.display = "none";
  downarrow3.style.display = "block";
  paragraph[2].style.display = "none";
});
downarrow3.addEventListener("click", (e) => {
  uparrow3.style.display = "block";
  downarrow3.style.display = "none";
  paragraph[2].style.display = "block";
});

//! fourth
let uparrow4 = arrow[6];
let downarrow4 = arrow[7];

uparrow4.addEventListener("click", (e) => {
  uparrow4.style.display = "none";
  downarrow4.style.display = "block";
  paragraph[3].style.display = "none";
});
downarrow4.addEventListener("click", (e) => {
  uparrow4.style.display = "block";
  downarrow4.style.display = "none";
  paragraph[3].style.display = "block";
});
