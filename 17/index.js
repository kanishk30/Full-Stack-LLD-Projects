
// fetch method - used to call an api.
// q = query param

let temperatureField = document.querySelector('.temp');
let cityField = document.querySelector('.time_location p');
let dateField = document.querySelector('.time_location span');
let emojiField = document.querySelector('.weather_condition img');
let weatherField = document.querySelector('.weather_condition span');
let searchField = document.querySelector('.searchField');
let formElem = document.querySelector('form');

const target = 'bangalore';

async function fetchData(target) {
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data =  await response.json()
        // console.log('Response object',response);
        // console.log('Response JSON',data);
        
        let currentTemp = data.current.temp_f;
        let currentCondition = data.current.condition.text;
        const locationName = data.location.name;
        const localTime = data.location.localtime;
        const conditionEmoji = data.current.condition.icon;

        console.log(currentTemp, currentCondition, locationName, localTime, conditionEmoji)
        

        formElem.addEventListener('submit', search);
        updateDOM(currentTemp, locationName,localTime, currentCondition,  conditionEmoji)

        function search(ev) {
            ev.preventDefault(); // to avoid refreshing the page on form submit.
            console.log(searchField.value)
            const target = searchField.value;
            fetchData(target)
        }

        function updateDOM(temp, locationName, time, condition, emoji) {
            temperatureField.innerText = temp;
            cityField.innerText = locationName;
          

            const exactDate = time.split(' ')[0];
            const exactTime = time.split(' ')[1];

            // to convert date to day;

            const exactDay = getFullDayName(new Date(exactDate).getDay());
            console.log(exactDay);

            dateField.innerText = `${exactTime} - ${exactDay} ${exactDate}`
            console.log('[emoji]', emoji)
            console.log('[emoji field]', emojiField)
            emojiField.src = emoji;
            // emojiField.setAttribute('src', emoji);
            weatherField.innerText = condition;
        }
        



    } catch(err) {
        console.log(err)
    }
}

function getFullDayName(num) {
    switch (num) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return '';
    }
}

fetchData(target);

