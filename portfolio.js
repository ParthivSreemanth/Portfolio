  const scriptURL = 'https://script.google.com/macros/s/AKfycbw9LLS42Zy0cEsDvacS5IbxtOZo9yl_2ZqZrrjMUw8azaI1QSFUwI41sxB5mmEylOV9/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
   



 function showPopUp(){
alert("Form Submitted!");
 }

