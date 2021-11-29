//shows working path
//console.log(process.argv);

//create empty array called movieArr
const movieArr = [];

//create class Movie with common properties. Add(push) Objects to movieArr using .push and thi. 'this.' will add all values with 'this.'
class Movie {
    constructor(title, actor, director) {
        this.title = title;
        this.actor = actor;
        this.director = director;
    }

    add() {
        movieArr.push(this);
    }
}

//export data so it can be used in other modules. use {} when exporting more than one object
module.exports = {Movie, movieArr};