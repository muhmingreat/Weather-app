//http://api.weatherapi.com/v1/current.json?key=f2d6edf449824dedbd3101508231403&q=London&aqi=no
const locationFeild = document.querySelector('.time-location')
const condition = document.querySelector('.condition')
const tempField= document.querySelector('.temp')
const weather = document.querySelector('.condition p')
const form = document.querySelector('form')
const searchField = document.querySelector('input');
const dateAndTmeField = document.querySelector('.timeAndDate');

let target = 'London'

const searchLocation = (e) => {
        e.preventDefault();
        fetchResult(target)
        target = searchField.value;

        fetchResult(target)
}

const updateDetails = (temp, locationName, time, condition) => {

const splitDate = time.split(' ')[0]
const splitTime = time.split (' ')[1]
const currentDay = getDayName(new Date(splitDate).getDay())

        tempField.innerText = temp + '°C'

        locationFeild.innerHTML = `<p>${locationName}</p>;`
    dateAndTmeField.innerHTML =`${splitDate} ${currentDay} ${splitTime}`

        weather.textContent = condition
}
const getDayName = (number) => {
   if (number === 0) return 'Sunday'
   if (number === 1) return 'Monday'
   if (number === 2) return 'Tuesday'
   if (number === 3) return 'Wednesday'
   if (number === 4) return 'Tursday'
   if (number === 5) return 'Friday'
   if (number === 6) return 'Saturday'
   }
   
form.addEventListener('submit', searchLocation)

const fetchResult = async (targetLocation) => {
    
    const url = `http://api.weatherapi.com/v1/current.json?key=f2d6edf449824dedbd3101508231403&q=${targetLocation}&aqi=no`

    const res = await fetch(url)
    
    const data = await res.json()
    console.log(data)
    let locationName =  data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails( temp, locationName, time, condition)
} 

fetchResult(target)            