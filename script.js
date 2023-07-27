let sec = 0, min = 0, hour = 0;
let displayTimer = document.querySelector('.timer');
function stopWatch() {
   sec++;
   if (sec == 60) {
      sec = 0;
      min++;
   }
   if (min == 60) {
      min = 0;
      hour++;
   }
   let ans;
   if (hour < 10)
      ans = '0' + hour;
   else
      ans = hour;
   if (min < 10)
      ans = ans + ':0' + min;
   else
      ans = ans + ':' + min;

   if (sec < 10)
      ans = ans + ':0' + sec;
   else
      ans = ans + ':' + sec;
   displayTimer.innerText = ans;
}
// setInterval(stopWatch, 1000)
let timeInterval = null;
let timeStatus = 'off';
let startStopBtn = document.querySelector('#startStopBtn');
let resetBtn = document.querySelector('#resetBtn');

startStopBtn.addEventListener('click', function () {
   if (timeStatus == 'off') {
      timeInterval = setInterval(stopWatch, 1000);
      timeStatus = 'on';
      document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
   }
   else
   {
      clearInterval(timeInterval);
      document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
      timeStatus = 'off';
   }
})

resetBtn.addEventListener('click', function () {
   displayTimer.innerText = '00:00:00';
   clearInterval(timeInterval);
   document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
   sec = 0, min = 0, hour = 0;
   timeStatus = 'off';
})
