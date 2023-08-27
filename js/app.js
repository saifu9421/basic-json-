 function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
 }



 function loadUsers(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res =>  res.json())
     .then(data => disPlayUsers(data) )
 }


 function disPlayUsers(data){
      const ul  =  document.getElementById('load-user');
      for(const user of data){
         console.log(user.email);
          const li  =  document.createElement('li');
          li.innerText =  user.email;
          ul.appendChild(li);
      }
 };

 

 function photos (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>  loadPhoto(data))
 }


 function loadPhoto(data){
   const ul =  document.getElementById('photo-list');
      for(const  user of data){
         console.log(user.thumbnailUrl);
         const li =  document.createElement('li');
         li.innerText = user.thumbnailUrl;
         ul.appendChild(li);
      }
 };