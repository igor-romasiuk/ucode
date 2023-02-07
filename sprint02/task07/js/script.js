"use strict"

const currentDate = new Date('42 03:24:00')
const year = currentDate.getFullYear()
const date = currentDate.getDate() 
const months = currentDate.getMonth()
const hours = currentDate.getHours()
const minute = currentDate.getMinutes()
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

function getFormattedDate (currentDate) {
    const dayName = days[currentDate.getDay()]
    return`${date}.${months}.${year} ${hours}:${minute} ${dayName}`
}
getFormattedDate(currentDate)
console.log(getFormattedDate(currentDate))






//const currentDate = new Date().toLocaleString('en', {day:"numeric", month:"numeric", year:"numeric"});
//const day = getDay({weekday:"long"})
//function getFormattedDate (currentDate) {
//    console.log(currentDate);
//}
//getFormattedDate(currentDate)