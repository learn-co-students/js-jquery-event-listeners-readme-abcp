//define functions here

$(document).ready(function(){

// call functions here

});




function getIt() {
  $('p').on("click", function() {
  alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
   $('img').addClass("tasty");
  });
}

function pressIt() {
  $("#typing").on('keydown', function(key) {
    if(key.which === 71) {
      alert('The G key was pressed.');
    }
  });
}
 
function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}


// $('h1').on("click", function() {
//   alert("You clicked me!");
// });

// $('img').on('click', function(){
//   console.log("I am a minion!");
// });