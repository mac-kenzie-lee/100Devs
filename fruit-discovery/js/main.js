//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getRandomGif)

const box = document.getElementById("box")

function getRandomGif(){

  const url = 'https://api.giphy.com/v1/gifs/random?api_key=h4OQhk925vyIqyt14pi11XZTCSapr73S&tag=&rating=g'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        //deletes fav bar and title for each new request so old ones aren't hanging around.
        if (box.children.length > 0) {
          let b0 = box.children[0]
          let b1 = box.children[1]
          b0.remove()
          b1.remove()
     
          }
       //   box.removeChild(box.childNodes[0])
         // box.removeChild(box.childNodes[1])
        


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

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

