import React, { useEffect, useRef, useState } from 'react';
import "./TitleCard.css"
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
    const CardsRef = useRef();

const handleWheel=(event)=>{
  event.preventDefault();
  CardsRef.current.scrollLeft += event.deltaY;
}

const [apiData, setApiData] = useState([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjFjYTdmY2RlYTUyMWRkNjFmOWI1ZDRhOTYxZGQ3NyIsIm5iZiI6MTcxOTcyOTU4OC42ODI3OTUsInN1YiI6IjY2ODBmYTgwY2Q1YWEwZjQxZmFmZmQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F8lOxEpyRq9Xn8jAmbJYx-OLqLgEcs0LnzioQtPnbNQ'
  }
};

useEffect(()=>{
 CardsRef.current.addEventListener('wheel', handleWheel)

 fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
},[]);


    return (
        <div className='title-card'>
            <h2>{title?title:"Popular on Netflix"}</h2>
             <div className="card-list" ref={CardsRef}>
                {apiData.map((card, index )=>{
                       return <Link to={`player/${card.id}`} className="card" key={index} >
                         <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                         <p>{card.original_title}</p>
                       </Link>

                })}
             </div>
        </div>
    );
}

export default TitleCards;