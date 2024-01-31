let a = document.getElementById("what-is");
let b = document.getElementById("how-much");
let c = document.getElementById("where-can");
let d = document.getElementById("how-do");
let e = document.getElementById("what-can");
let f = document.getElementById("is-netflix");

a.style.display = "none";
b.style.display = "none";
c.style.display = "none";
d.style.display = "none";
e.style.display = "none";
f.style.display = "none";

function whatIsNetflix() {
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
  }
}
function howMuch() {
  if (b.style.display === "block") {
    b.style.display = "none";
  } else {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
  }
}
function whereCan() {
  if (c.style.display === "block") {
    c.style.display = "none";
  } else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
  }
}
function howDo() {
  if (d.style.display === "block") {
    d.style.display = "none";
  } else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "none";
  }
}
function whatCan() {
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
    f.style.display = "none";
  }
}
function isNetflix() {
  if (f.style.display === "block") {
    f.style.display = "none";
  } else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "block";
  }
}
