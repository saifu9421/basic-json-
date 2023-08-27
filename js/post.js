function loadPost(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPost(data));
};

/*
1.get the container element where you want to add the  new element 
  2.create  child element 
  3.set inner test or inner html
  5.append Child
*/

function  displayPost(data){
     const postsContainer = document.getElementById('posts-container');
     for(const post of data ){
          const div = document.createElement('div');
            div.classList.add('post');
          console.log(post);
          div.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post:${post.title}</h5>
            <P>Post Description:${post.body } </p>
          `;
          postsContainer.appendChild(div);
     }

};

loadPost()

