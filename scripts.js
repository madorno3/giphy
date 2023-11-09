const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("searchbar");
const deleteBtn = document.getElementById("delete");

async function getGif(){
  // getting the data
  let searchTerm = searchBar.value;
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&q=${searchTerm}`)
  let results = res.data.data.length
  let randomGif = Math.floor(Math.random() * results)
  //data into image
  let img = document.createElement("img");
  img.src = res.data.data[randomGif].images.original.url;
  let div = document.getElementById("div")
  div.appendChild(img);
}

// click event
searchBtn.addEventListener("click", function(e){
  e.preventDefault();
  getGif();
   
})

// delete button
deleteBtn.addEventListener("click", function(e){
  img.remove();
})





