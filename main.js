function myfunc(e) {
   
    const full_name= document.getElementById('name').value;
    const email = document.getElementById('email').value;
     
    const obj = {
        full_name,
        email
    }
    localStorage.setItem("userdetails", JSON.stringify(obj));
    
    localStorage.getItem('name', full_name);
     localStorage.getItem('mail', email);
 
 } 
 
 