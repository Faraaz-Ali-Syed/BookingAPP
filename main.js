function myfunc(e) {
   
    const full_name= document.getElementById('name').value;
    const email = document.getElementById('email').value;
     localStorage.getItem('name', full_name);
     localStorage.getItem('mail', email);
 
 } 
 
 