function myfunc(event) {
   
    event.preventDefault();

   const name= document.getElementById('name').value;
   const email = document.getElementById('email').value;
    
   localStorage.setItem('name', name);
   localStorage.setItem('mail', email);

   const obj = {
       name,
       email
   }

   localStorage.setItem(obj.email, JSON.stringify(obj));
   showuseronscreen(obj)
} 

function showuseronscreen(obj) {
    const parentele = document.getElementById("listofitems")

    parentele.innerHTML = parentele.innerHTML + '<li>${obj.name} - ${obj.email}</li>';
}

 