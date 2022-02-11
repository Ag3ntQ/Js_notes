/*
   * getElementById()
   * getElementsByName() 
   * getElementsByTagName()
   * getElementsClassName()
   * 
*/



// Content access with id
var a = document.getElementById("head1");
a.innerHTML = "ID with Js"; // change content
a.style.color = "green"; // Css

// content access with class
 var b = document.getElementsByClassName("head2");
/* [0] for first element,some files has more tag with same class name */
b[0].innerHTML = "Class with Js";
b[0].style.color = "green"; 

// access with tag name
var c = document.getElementsByTagName("p")
c[0].innerHTML="TAG with js";
c[0].style.color = "green";

// access with name
var d = document.getElementsByName("user");
function call(){
  key = d[0].value;
  alert(key);
}