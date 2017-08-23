$(function () {
  $('[data-toggle="popover"]').popover()
})

function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


//do zliczania like'ów
$(document).ready( () => {
 
  $('.plus-button').click( (e) => {
      
    const maxValue = 10000

    const currentInput = $(e.currentTarget).parent().prev()[0];

    let plusInputValue = $(currentInput).html();

    if (plusInputValue < maxValue) {
      plusInputValue ++;
      $($(e.currentTarget).prev()[0]).removeAttr('disabled');
      $(currentInput).html(plusInputValue);

      if (plusInputValue >= maxValue) {
        $(e.currentTarget).attr('disabled', 'disabled');
      }
    }
  });
});



 