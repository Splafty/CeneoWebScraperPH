// Switching between tabs (about)

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab", "show");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab", "show");
}