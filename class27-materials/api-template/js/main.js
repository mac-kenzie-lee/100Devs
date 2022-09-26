//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=24OQPQrRxTVueEW6Oe1UXhIPMUa6vp95hF0rIFed&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector('h3').innerText = data.explanation;
        if (data.media_type === 'image') {
          document.querySelector('iframe').src = ""
          document.querySelector('img').src = data.hdurl;
        } else if (data.media_type === "video")
        document.querySelector('img').src = "";
        document.querySelector('iframe').src = data.url;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

