window.onload = function (e) {

  var inputs = document.querySelectorAll('input');
  var check = document.querySelector('#form-accept');


  document.querySelector('form').onsubmit = function (e) {
    var error = false;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '' || inputs[i].type.checkbox) {
        inputs[i].classList.add('denied');
        error = true;
        console.log(1);
      } else {
        inputs[i].classList.remove('denied');
      }
    }
    if (check.checkbox === true) {
      if (error) {
        e.preventDefault();
      }
    }
  }
}