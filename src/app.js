//import data from index.js (will default to index.js so only need to put the folder which contains it)

//args [1] and [2] are the default arguments that are returned for node.exe and file location. args[2] is e.g."add". After that args are class constructors.
//to run node src/app.js "add" "spiderman" "tom holland" "whoever directed"
// add = [2], spiderman = [3]. tom holland = [4] whoever directed = [5]
//e.g. node src/app.js "add multi" "Inception" "Leonardo Di Caprio" "Christopher Nolan" "Interstellar" "Matthew McConaughey" "Christopher Nolan"
//result:
// [
//     Movie {
//       title: 'Inception',
//       actor: 'Leonardo Di Caprio',
//       director: 'Christopher Nolan'
//     },
//     Movie {
//       title: 'Interstellar',
//       actor: 'Matthew McConaughey',
//       director: 'Christopher Nolan'
//     }
//   ]

const { Movie, movieArr } = require("./utils");

const app = (args) => {
    switch (args[2]) {
        case "add":
            const movie = new Movie(args[3], args[4], args[5]);
            movie.add();
            console.log(movieArr);
            break;
        case "add multi":
            const movie1 = new Movie(args[3], args[4], args[5]);
            const movie2 = new Movie(args[6], args[7], args[8]);
            movie1.add();
            movie2.add();
            console.log(movieArr);
            break;
        default:
            console.log("Incorrect command");
            break;
     }
};

app(process.argv);

