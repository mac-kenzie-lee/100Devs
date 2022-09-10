//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const url = 'https://api.nasa.gov/planetary/apod?api_key=xExEP3mdmxItb2dYayHUnfxeXcDIxvTxTb8CkQ8h'

fetch(url)
 .then(res => res.json())
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(`An error: ${err} was encountered, try again.`)
})
