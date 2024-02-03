// var splashScreen = document.querySelector('.splash');
// splashScreen.addEventListener('click',()=>{
//   splashScreen.style.opacity = 0;
//   setTimeout(()=>{
//     splashScreen.classList.add('hidden')
//   },100)
// })

setTimeout(function() {
  $('.splash').fadeOut(500);
}, 1000); // <-- time in milliseconds
