var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);// JavaScript Document


var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of li items in Menu: "+ linksInMenu.length);

var myComments = document.getElementById("commentary");

myComments.setAttribute("align", "right");

myComments.setAttribute("style", "color: red");