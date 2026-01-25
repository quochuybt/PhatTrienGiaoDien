const  data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
    let forecast = '';
    for (let i = 0; i < arr.length; i++) {
        forecast += `... ${arr[i]}°C trong ${i + 1} ngày `;
    }
    console.log(forecast);
}
printForecast(data1);
printForecast(data2);