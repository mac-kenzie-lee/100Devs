//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow{
    constructor(title, actors, plot, img) {
        this.title = title;
        this.actors = actors;
        this.plot = plot;
        this.img = img;
    }
    themeSong() {
        alert("Doo doo doo, you're watching " + this.title)
    }
    showEnding(){
        alert("That was " + this.title)
    }
    showCast() {
        alert("This show starred "); this.actors.forEach((e) => alert(e))
    }
    }

    let loveIsBlind = new MakeNetflixShow("love is blind", ['donny', 'rosio', 'julian'], "A killer finds his was to a dating show", 'picture link')
