var templates = document.getElementsByClassName('container');
var retour = document.getElementById('retour');
var avance = document.getElementById('avant');
var cursor = 0;
var icons = document.getElementsByClassName('rogue-leader');

checkTemplate();

avance.addEventListener("click", avancer);
retour.addEventListener("click", retourner);

function avancer(){
    cursor++;
    checkTemplate();
};

function retourner(){
    cursor--;
    checkTemplate();
};

function checkTemplate(){
    for(i=0;i<templates.length;i++)
    {
        if(i != cursor)
        {
            templates[i].style.display = 'none';
            icons[i].classList.remove('effect');
        }
        else
        {
            templates[i].style.display = 'flex';
            icons[i].classList.add('effect');
        }
    }
};
