const date_picker_element= document.querySelector('.datepicker');
const selected_date_element= document.querySelector('.datepicker .selected-date');
const dates_element= document.querySelector('.datepicker .dates');

date_picker_element.addEventListener('click', toggleDatePicker);

function toggleDatePicker(e) 
{   
    if(!checkEventPathForClass(e.path, 'dates')){
    dates_element.classList.toggle('active');}
}

function checkEventPathForClass (path, selector)
{
    for (let i=0; i<path.length; i++)
    {
        if (path[i].classList && path[i].classList.contains(selector))
        {
            return true;
        }
    }

    return false;
}