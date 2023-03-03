/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json;
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + CJ's Top 8 Movies",
            owner: "CJ",
            github: "https://github.com/123csandor/Sandor-p3"
      }
    },
      methods: {
            getMonthText(dataArry){
                console.log(dataArry);
                  switch(dataArry[1]){
                    case 1:
                        return "January " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 2:
                        return "February " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 3:
                        return "March " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 4:
                        return "April " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 5:
                        return "May " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 6:
                        return "June " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 7:
                        return "July " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 8:
                        return "August " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 9:
                        return "September " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 10:
                        return "October " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 11:
                        return "November " + dataArry[2] + ", " + dataArry[0];
                    break;
                    case 12:
                        return "December " + dataArry[2] + ", " + dataArry[0];
                    break;
                    default:
                        return "ERROR DATE NOT REAL";
                  }  
                },
                posterClick(index){
                  let x = this.movies[index].posters.length - 1;
                  let y = this.movies[index].posterindex;

                  if(y < x){
                    this.movies[index].posterindex++;
                  } 
                  else {
                    this.movies[index].posterindex = 0;
                  }
                },
                timeText(minutes){
                  let hour = Math.trunc(minutes / 60);
                  let min = minutes % 60;
                  return hour + "h " + min + "m";
                }
      }
})

vue_app.mount("#vue_app")
