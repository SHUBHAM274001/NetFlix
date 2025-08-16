// import React, { useEffect, useState,useRef } from "react";
// import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";

// const TitleCards = ({title ,category}) => {

  
//   return (
     
//     // const cardsRef = useRef();

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTZlMWQ4YWMzNDc1ZCIsInNiOiIyNjYzMmM0YjQwMjM1ZmJjBBly7ncaGfCmZc7dLCJY2M1MyI5In0.fBb3DJ7ciMwNQZSmHzd6NfxMzfOJZZX7aw9UiOxfQ_vpDXmWrJ1RO0Y_x_xHbHMDYZGhMtkZnKfq9J38gu'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//     <div className="TitleCards">
//       <h2>{title ?title:"Popular on Nextflix"}</h2>
//       <div className="card-list" >
//         {cards_data.map((card, index) => {
//           return (
//             <div className="card" key={index}>
//               <img src={card.image} alt="" />
//               <p>{card.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;

import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);


    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhdWQiOiIyMzJhNDU1NGZjY2ViMjQ5YjVhYTRhNjZhOGRiZjY3MyIsIm5iZiI6MTc1NTMzODgwMi45MzkwMDAxLCJzdWIiOiI2OGEwNTgzMjRmYmQ5MzBlZWI4NmY3MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9ILXRJIfhD5zTGbkH8JUYIYy4QGpPUQ36GegFEZUJYM'

      },
};
    
     useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then((response) => response.json())
      .then((response) =>setApiData(response.results || [])
      )
      .catch((err) => console.error(err));
  },
   []);

  return (
    <div className="TitleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
       
            {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
               <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path}  alt={card.original_title} />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

