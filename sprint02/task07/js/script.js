"use strict"

const currentDate = new Date()

function getFormattedDate (currentDate) {
    let date = currentDate.getDate()
    if (date < 10) {
        date = '0' + `${date}`
    }
    let month = currentDate.getMonth() + 1
    if (month < 10) {
        month = 0 + `${month}`
    }
    const year = currentDate.getFullYear()
    let hours = currentDate.getHours()
    if (hours < 10) {
        hours = 0 + `${hours}`
    }
    let minute = currentDate.getMinutes()
    if (minute < 10) {
        minute = 0 + `${minute}`
    }
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const dayName = days[currentDate.getDay()]
    return`${date}.${month}.${year} ${hours}:${minute} ${dayName}`
}
console.log(getFormattedDate(currentDate))


