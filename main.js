/*function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }
  
  not using above code anymore mixed and matched different code from various resources*/

  function pWord() {
    var passwd;
    passwd = document.getElementById('pass').value;
    if(passwd=="strength"){
    window.open ('./homeScroll.html','_self',false);
    }
    else{
    alert('Warning! Password was wrong please try again');
    }
  }

  const currentYear = new Date().getFullYear();
  
  let countDownDate = new Date(`Oct 11, ${currentYear} 00:00:00`).getTime();
  // year.innerText = currentYear + 1;

  function calculate_age(dob) { 
    var diff = Date.now() - dob.getTime();
    var ageDate = new Date(diff); 
  
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById('age').innerHTML = calculate_age(new Date(2008, 10, 11));


  // Update the count down every 1 second
  const x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




















//Fade in dashboard box
// $(document).ready(function(){
//     $('.box').hide().fadeIn(1000);
//     });

//Stop click event
// $('a').click(function(event){
//     event.preventDefault(); 
//     });
    

