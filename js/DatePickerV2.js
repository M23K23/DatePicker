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

//DatePickerV2 code
//Start
let calendar = document.querySelector('.datePickerV2')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.datePickerV2-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');
        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date');
            }
             
            day.addEventListener('click', function(){
               day.classList.toggle('selected');
            })

            

        }
        calendar_days.appendChild(day)
    }

    
}




let month_list = calendar.querySelector('.month-list')
let month_picker = calendar.querySelector('#month-picker')


let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}


let selectedDate1=currDate;
let selectedMonth1=curr_month;
let selectedYear1=curr_year;

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#prev-mont').onclick = () => {
    --curr_month.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-mont').onclick = () => {
    ++curr_month.value
    generateCalendar(curr_month.value, curr_year.value)
}

//End