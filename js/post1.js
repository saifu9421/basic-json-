function loadPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => 
        res.json())
        .then(data =>  displayPost(data))
     
};

function displayPost(data){
    const postContainer  =  document.getElementById('post-container');
      for(const user of data){
        console.log(user);
         const div   =  document.createElement('div');
         div.classList.add('post')
          div.innerHTML = `
            <h3>UserId:${user.userId} </h3>
            <h4>Id:${user.id} </h4>
            <h4>Title:${user.title} </h4>
             <p>Body: ${user.body}</p>
          `
         postContainer.appendChild(div);

      }
};


loadPost()