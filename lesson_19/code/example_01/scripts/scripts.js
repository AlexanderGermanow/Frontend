document.addEventListener('DOMContentLoaded', () => {
    const localtime = document.getElementById('date');
    const city = document.getElementById('City');
    const current = document.getElementById('weather');
    const celsius = document.getElementById('temp');
    const icon = document.getElementById('icon');
    const dayOne = document.getElementById('nextday');
    const actualDetails = document.getElementById('Date')


    const dayall = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tuersday', 'Friday', 'Saturday']


    const serverWork = async () => {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=1a2481b373aa488995375035240603&q=Berlin&days=7&aqi=no&alerts=no');
        const bodyData = await response.json();
        console.log(bodyData);
        city.textContent = bodyData.location.name;
        localtime.textContent = bodyData.location.localtime;
        current.textContent = bodyData.current.condition.text;
        celsius.textContent = bodyData.current.temp_c;
        icon.textContent = bodyData.current.condition.icon;
        dayOne.textContent = bodyData.forecast;
        actualDetails.textContent = bodyData.current;

        const date1 = new Date(localtime);
        const dayIndex = date1.getDay();
        const dayName = dayall[dayIndex];

        console.log(`City: ${city}`);
        console.log(`Date and Time: ${localtime}`);
        console.log(`Day of the week: ${dayName}`);
        console.log(icon)
    }
    serverWork();
})