//populates random api to use
const holder = document.createElement("ul");
document.body.appendChild(holder)

document.querySelector('button').addEventListener('click', getFetch)
function random(min, max) { return Math.floor(Math.random() * (max - min) + min)}
        

function getFetch(){
  if (holder.childNodes.length !== 0) {
    if (holder.hasChildNodes()) 
    while(holder.childNodes.length !== 0){
      holder.removeChild(holder.children[0]);
    }
}

  const url = 'https://api.publicapis.org/entries'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let max = data.count;
        let r = random(0, max -1);
        console.log(data.entries[r])
        console.log(r)
        console.log('fcall')
        showDataInDom(data.entries[r])
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function showDataInDom(data) {

for (let i in data) {
  console.log(i)
  console.log(data[i])
  createAddAppend(i, data[i], "li")
}

function createAddAppend(i, dataItem, elementType) {

  let ele = document.createElement(elementType);
  ele.innerText = i + ": " + dataItem;
  holder.appendChild(ele);
}

}