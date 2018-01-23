//define functions here

//alerts when paragraph is clicked
function getIt() {
  $('p').on('click', function() {
    alert('"Hey!"');
  } );
}
//adds tasty class to image
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}
 //alerts when user presses G key
function pressIt() {
    $('input').on('keydown', function(e) {
      if (e.which === 71) {
        alert("you pressed G")
      }
    })
  }

//alerts when form is submitted
function submitIt() {
  $('form').on('submit', function() {alert('Your form is going to be submitted now.')});
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
