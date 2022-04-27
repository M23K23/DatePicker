const date_picker_element= document.querySelector('.datepicker');
const selected_date_element= document.querySelector('.datepicker .selected-date');
const dates_element= document.querySelector('.datepicker .dates');
const mth_element= document.querySelector('.datepicker .dates .month .mth');
const next_mth_element= document.querySelector('#next-mth');
const prev_mth_element= document.querySelector('#prev-mth');
const days_element= document.querySelector('.datepicker .dates .days');

const months= ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September','October','November','December'];

let date= new Date();
let day= date.getDate();
let month=date.getMonth();
let year = date.getFullYear();

let selectedDate= date;
let selectedDay=day;
let selectedMont=month;
let selectedYear=year;

populateDates();

mth_element.textContent=months[month]+ ' ' + year;

selected_date_element.textContent=formatDate(date);


date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);



function toggleDatePicker(e) 
{   
    if(!checkEventPathForClass(e.path, 'dates')){ dates_element.classList.toggle('active');}
}

function populateDates(e)
{
    days_element.innerHTML= '';
    let amounth_days=31;

    if(month==1)
    {
        amounth_days=28;
    }

    for(let i=0;i<amounth_days;i++)
    {
        const day_element=document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent=i+1;

        if(selectedDate==(i+1) && selectedYear==year && selectedMont==month)
        {
            day_element.classList.add('selected');
        }

    day_element.addEventListener('click', function()
    {
            selectedDate=new Date(year + '-'+ (month+1) + '-' + (i+1));
            selectedDay=(i+1);
            selectedMont=month;
            selectedYear=year;
            selected_date_element.textContent=formatDate(selectedDate);
            selected_date_element.dataset.value= selectedDate;

            populateDates();
        });

        days_element.appendChild(day_element);
    }
}

function goToNextMonth(e){ 

    let test;
    console.log(test+1);

    month++;
    if(month>11)
    {
        month=0;
        year++;
    }
    mth_element.textContent=months[month] + ' ' + year;
    populateDates();
}

function goToPrevMonth(e){
    month--;
    if(month<0)
    {
        month=11;
        year--;
    }
    mth_element.textContent=months[month] + ' ' + year;
    populateDates();
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

function formatDate(d)
{
    let day=d.getDate();
    if(day<10)
    {
        day='0'+day;
    }

    let month=d.getMonth() + 1;
    if(month<10)
    {
        month='0'+month;
    }
    let year=d.getFullYear();

    return day + ' / ' + month + ' / ' +year;
}
