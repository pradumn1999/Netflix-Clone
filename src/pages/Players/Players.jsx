import React, { useEffect, useState } from 'react';
import "./Players.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const Players = () =>{
    const[apiData, setApiData]=useState({
        name : "",
        key:"",
        published_at:"",
        typeof: ""
    })
      
    const Navigate=useNavigate()
    const{id}=useParams();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjFjYTdmY2RlYTUyMWRkNjFmOWI1ZDRhOTYxZGQ3NyIsIm5iZiI6MTcxOTcyOTU4OC42ODI3OTUsInN1YiI6IjY2ODBmYTgwY2Q1YWEwZjQxZmFmZmQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F8lOxEpyRq9Xn8jAmbJYx-OLqLgEcs0LnzioQtPnbNQ'
        }
      };

       useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
             .then(response => setApiData(response.results[0]))
              .catch(err => console.error(err));
              console.log(apiData)
       })
         
        
       
    return (
        <>
            
         <div className='player'>
            <img src={back_arrow_icon} alt=""  onClick={()=> Navigate(-2)}/>
            <iframe width='90%' height='90%'
             src={`https://www.youtube.com/embed/${apiData.key}` }title='trailer' frameborder="0" allowTransparency></iframe>
             <div className='player_info'>
                <p>{apiData.published_at.slice(0,10)}</p>
                <p >{apiData.name}</p>
                <p>{apiData.type}</p>
                
             </div>
        </div>
        </>
    )
}

export default Players;