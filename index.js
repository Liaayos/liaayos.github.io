const lastUpdatedTxt = "Last Updated: ";
var lastUpdatedValue = document.lastModified;

const lastModElement = document.getElementById("lastModified");
lastModElement.outerHTML = lastUpdatedTxt + lastUpdatedValue

const today = new Date();
const year = today.getFullYear();

const yearElement = document.getElementById("year")

yearElement.outerHTML = year

