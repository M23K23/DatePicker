//Function for modal Window
//Start
const btn=document.querySelector('.modalWindow-button');
const modals=document.querySelector('.modal');
const modalOverlay=document.querySelector('.modal-overlay');

btn.addEventListener('click', function (e)
{
    modals.classList.add('modal--visible');
   
})

modalOverlay.addEventListener('click', function(e)
{
    if(e.target==modalOverlay){ modals.classList.remove('modal--visible');}
   
})
//END

//Change Mode
//Start

const checkbox= document.getElementById('checkbox');
const modalWindow=document.querySelector('.modalWindow');

checkbox.addEventListener('change', function()
{
    //change theme
    modalWindow.classList.toggle('NightMode');
})

//End