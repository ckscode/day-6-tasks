//a.Constructor for the class Movie
class Movie{
    //b.rating = "PG" when no rating is provided
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
}

}


const viduthalai = new Movie("Viduthalai","RS entertainment","A");
const premalu = new Movie("Premalu","Ettan Productions","PG");
//d.new instance of the class Movie is created
const jamesBond = new Movie("Casino Royale","Eon Productions","PG13");

//c.function to filter the movies with "PG" rating
const movies = [viduthalai,jamesBond,premalu];
const getPG= (arr) =>{
  const PGMovies=arr.filter((item)=>{
    return item.rating === "PG"
  })

  PGMovies.map((item)=>console.log(item.title))
  
} 
getPG(movies);

