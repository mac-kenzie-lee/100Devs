//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


const date = '2022-09-09'
const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=xExEP3mdmxItb2dYayHUnfxeXcDIxvTxTb8CkQ8h`


const d = document.getElementById('date')
const btn = document.getElementById('btn')

btn.addEventListener('click', getDate) 

function getDate() {

    let unrefinedDate = d.value
 console.log(d.value)
 if (unrefinedDate.length === 10)
{
    let number = 0;
    if (unrefinedDate[2] === '/' && unrefinedDate[5] === "/") {
        console.log('hound dough')
    
        for (let i = 0; i < unrefinedDate.length; i++) {
            if (i !== 2 || i !== 5) {
            if (Number(unrefinedDate[i]) >= 0 && Number(unrefinedDate[i]) <= 9) {
                number++;
            }
     


        
        }
        let year = Number(unrefinedDate.slice(-4))
        let month = Number(unrefinedDate.slice(3,5))
        let day = Number(unrefinedDate.slice(0,2))
        const today = new Date();
        const y = today.getUTCFullYear();
        const m = today.getUTCMonth() + 1;
  
        console.log('utc m' + m)
        const dy = today.getDate();
       let minyr = 1900;
       let maxmonth = 12;
       let maxday = 31;

       let maxyr = y

        if (number === 8) {
            notInTheFuture(1, maxday, maxmonth, 1, minyr, y, day, year, month, m, dy)
        }
    }

}
}


function addThePicture(json) {
const imgTitle = document.querySelector('h2')
const img = document.querySelector('img')
const imgDes = document.querySelector('h3')

img.src = json.hdurl
img.alt = json.title
img.style.width = '80vw'
imgTitle.innerText = json.title
imgDes.innerText = json.explanation
}



function getPicture(url){
fetch(url)
 .then(res => res.json())
.then(data => {
    addThePicture(data);
        console.log(data)
}).catch(err => {
    console.log(`An error: ${err} was encountered, try again.`)
})
}





getPicture(url)

}
function notInTheFuture(dm, dmx, mmx, mmin, yrmin, thisyear, d, y, m, thismonth, thisday) {
    if ((y <= thisyear) && (y >= yrmin) ) {
        console.log("a real yr.")
    }
if ((m >= mmin) && (m <= mmx)) 
    {console.log('realmonth')}
if ((d <= dmx) &&  (d >= dm) ) 
{
    console.log('real day')
}

let future = false;
if ((y > thisyear)) {
    console.log(future)
    future = true;
    console.log(future)
    
} else if (y >= thisyear) {
    console.log(future)
    
    if (m > thismonth ) {
        console.log(m)
        console.log(thismonth)
        console.log(future)
    
        future = true;
        console.log(future)
    
    } else if     
(        (m === thismonth) && (d > thisday) ) {
    console.log(future)
    
    future = true;
        }

    }

{
 console.log(future)

}

console.log(thisday)
} 

