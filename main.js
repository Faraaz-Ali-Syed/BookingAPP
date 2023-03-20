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

    const childele = document.createElement('li')
    childele.textContent = obj.name + '-' + obj.email;

    //parentele.innerHTML = parentele.innerHTML + '<li>${obj.name} - ${obj.email}</li>';

    const deletebtn = document.createElement('input');
    deletebtn.type = "button";
    deletebtn.value = 'Delete';
    deletebtn.onclick = () => {

        localStorage.removeItem(obj.email)
        parentele.removeChild(childele)

    }
    childele.appendChild(deletebtn)
    parentele.appendChild(childele)

}



 