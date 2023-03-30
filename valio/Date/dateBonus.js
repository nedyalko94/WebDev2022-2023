// updating windows and display clock

// window.setInterval(UpdateTime, 1000)

// function UpdateTime() {
//     let date2 = new Date()
//     var hours, minutes, seconds;
//     hours = date2.getHours();
//     minutes = date2.getMinutes();
//     seconds = date2.getSeconds();
//     lead.innerHTML = `${hours}:${minutes}:${seconds}`
// }
let date = new Date();

let result = date.toLocaleString('nl-BE', { timeZone: 'Europe/Brussels', day: '2-digit', month: 'long', year: 'numeric' })

 result = date.toLocaleString('bg', { timeZone: 'Europe/Sofia', day: '2-digit', month: 'long', year: 'numeric' })

console.log(result)
