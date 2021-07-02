setInterval(() => {
  const fullDate = new Date();

  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = `: ${minutes}`;
  document.getElementById("seconds").innerHTML = `: ${seconds}`;
}, 1000);
