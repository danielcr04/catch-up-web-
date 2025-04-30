//

export class Episode {
    constructor({id= "", name= "", season="", number="", summary="", url="", rating="", image=""}) {
        this.id = id;
        this.name = name;
        this.season = season;
        this.number = number;
        this.summary = summary;
        this.url = url;
        this.rating = rating;
        this.image = image;

    }
}