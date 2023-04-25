//Example fetch using pokemonapi.co
if (localStorage.length >= 1)
{
  let len = localStorage.length;
console.log(localStorage.length)
let checker = 0;
for (let k in localStorage)
{
  if (checker >= len) {
    console.log('stop')
  } else {
    console.log(localStorage[k])
    addToTheList(localStorage[k], k)
  }
checker++
}

}

document.querySelector("#gifB").addEventListener('click', getRandomGif)

const box = document.getElementById("box")

function getRandomGif(){

  const url = 'https://api.giphy.com/v1/gifs/random?api_key=h4OQhk925vyIqyt14pi11XZTCSapr73S&tag=&rating=g'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        let d = data.data;
        //deletes fav bar and titlefor each new request so old ones aren't hanging around.
        if (box.children.length > 0) {
          let b0 = box.children[0]
          let b1 = box.children[1]
          b0.remove()
          b1.remove()
          }

        console.log(data)
  let i = document.querySelector("img") 
          i.src = data.data.images.downsized.url
        console.log(data.data)

        //title stuff
        let title = document.createElement("h3")
        title.innerText = "Click if you want to know the title"

        //favorites stuff
        let favThisBox = document.createElement('div');
        let favThis = document.createElement('button');
        favThis.innerText = 'Fav me'

        favThisBox.appendChild(favThis)
        box.appendChild(title);
        box.appendChild(favThisBox)
        console.log(data.data.title)
        
        //event listener to show title
        title.addEventListener("click", showTitle)

        function showTitle(){
          title.innerText = data.data.title;
        }

        //event listener to add that gif to your favorites
        favThis.addEventListener('click', addItToMyFavs)

        function addItToMyFavs() {
          let sImg = d.images.fixed_width_small.url
          let id = d.id
         localStorage.setItem(id, sImg)
        addToTheList(sImg, "hey");
        favThis.removeEventListener('click', addItToMyFavs)
        }



      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




function addToTheList(url, alt) {
  let favBox = document.querySelector('#favBox')
 let newFavLi = document.createElement('li')
 let newFavImg = document.createElement('img')
 let newFavRemove = document.createElement('button')

 //creating image data
 newFavImg.src = url;
 newFavImg.alt = alt;

 //creating remove button data
 newFavRemove.innerText = "Remove me"

 //add to li
newFavLi.appendChild(newFavImg)
newFavLi.appendChild(newFavRemove)

//add li to list
favBox.appendChild(newFavLi)


//remove the favorite eventlistner
newFavRemove.addEventListener('click', deleteFromLocalStorage)

}


function deleteFromLocalStorage(e) {
  console.log(e.target)
  let localStorageKey = e.target.parentElement.children[0].src
  let localStorageId = e.target.parentElement.children[0].alt
  localStorage.removeItem(localStorageId)
  let parentItem = e.target.parentElement;
  parentItem.remove();

  console.log(localStorageKey)

}