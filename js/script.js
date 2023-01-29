var templates = document.getElementsByClassName('container');
var retour = document.getElementById('retour');
var avance = document.getElementById('avant');
var cursor = 0;
var icons = document.getElementsByClassName('rogue-leader');
var contain0 = document.getElementById("container0");
var contain1 = document.getElementById("container1");
var contain2 = document.getElementById("container2");

checkTemplate();

avance.addEventListener("click", avancer);
retour.addEventListener("click", retourner);

function avancer(){
    cursor++;
    if(cursor > 2)
    {
        cursor = 2;
    }
    if(cursor)
    checkTemplate();
};

function retourner(){
    cursor--;
    if(cursor < 0)
    {
        cursor = 0;
    }
    
    checkTemplate();
};

function checkTemplate(){
    location.href = "#container" + cursor ;
    for(i=0;i<templates.length;i++)
    {
        if(i != cursor)
        {
            templates[i].style.opacity = '0';
            templates[i].style.translate = '50%';
            templates[i].style.translate = '0%';
            // templates[i].style.display = 'none';
            // icons[i].classList.remove('effect');

        }
        else
        {
            templates[i].style.opacity = '1';
            templates[i].style.translate = '-50%';
            templates[i].style.translate = '0%';
            // templates[i].style.display = 'flex';
            // icons[i].classList.add('effect');
            
        }
    }
};
