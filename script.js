const loadAllPosts = async category => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ''
    }`
  );
  const data = await response.json();
  displayAllPosts(data.posts);
};

const displayAllPosts = posts => {
  const postContiner = document.getElementById('post-container');
  posts.forEach(post => {
    console.log(post);

    const div = document.createElement('div');

    div.innerHTML = `
   
    <div class="flex gap-10 bg-gray-100 p-10">
  <div class="relative">
    <img class="w-24 h-20" src="${post.image}" alt="">

<p class="absolute p-2 rounded-full top-0 right-0 ${
      post.isActive ? 'bg-green-600' : 'bg-red-600'
    }">
 
</p>

  </div>
  <div>
    <div class="flex gap-10 items-start">
      <h3 class="text-xl text-gray-700 "># Comedy</h3>
      <h3 class="text-xl text-gray-700 ">Author:  ${post.author.name}</h3>
    </div>
    
    <div class="flex flex-col">
      <h2 class="text-2xl text-gray-900 text-bold py-4">${post.title}</h2>
      <p>${post.description}</p>
    </div>

    <div class="flex justify-between text-center py-4 ">
  <!-- Post Info (Comments, Views, Time Posted) -->
  <div class="flex flex-col md:flex-row gap-4">
    <!-- Comments -->
    <p class="flex items-center">
      <i class='bx bx-message-rounded-dots text-2xl'></i>
      <span class="ml-2">${post.comment_count}</span>
    </p>

    <!-- Views -->
    <p class="flex items-center">
      <i class='bx bx-show text-2xl'></i>
      <span class="ml-2">${post.view_count} views</span>
    </p>

    <!-- Time Posted -->
    <p class="flex items-center">
      <i class='bx bx-stopwatch text-2xl'></i>
      <span class="ml-2">${post.posted_time} min</span>
    </p>
  </div>

  <!-- Icon (Message Check) -->
  <button class="addToList" onclick="markAsRead('${post.description}','${
      post.view_count
    }')">
  <i class='bx bx-message-alt-check bg-green-600 text-2xl  rounded-full cursor-pointer text-white px-4 py-2'></i>
  </button>
</div>


</div>


   `;
    postContiner.appendChild(div);
  });
};

const markAsRead = (description,view_count) => {
  const markAsReadCounter = document.getElementById('markAsReadCounter');
  const div = document.createElement("div")
  div.innerHTML = `
  
  `
};
loadAllPosts();

const handleSearchByCategory = () => {
  const searchText = document.getElementById('searchPosts').value;
  loadAllPosts(searchText);
};


fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  .then(res => res.json())
  .then(data => latestPosts(data))
  .catch(error => console.log(error));

const latestPosts = (x) => {
  const latestPostContainer = document.getElementById('latest-post-container');
 
  const div = document.createElement("div")
  div.innerHTML = `
  
  `
};