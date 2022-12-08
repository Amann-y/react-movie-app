import React from 'react'
import { useGlobalContext } from './context'
import './App.css'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const {movie,isLoading} = useGlobalContext()
  if (isLoading) {
    return (
      <div className='container'>
       <div className='row'>
       <div className='col-12'>
        <h3 className='text-center text-danger mt-5'>Loading...</h3>
       </div>
       </div>
      </div>
    )
  }



  return (
    <>
      <div className='container my-3'>
        <div className='row gy-3'>
        {
        movie.map((ele,ind)=>{
          const mName = ele.Title.substring(0,15)
          return <div className='col-md-4 col-sm-6 cent-card' key={ind}>
            <NavLink className='nav-link' to={`/movie/${ele.imdbID}`}>
           <div className="card">
           <h5 className="card-title text-center text-warning">{mName.length>=15 ? `${mName} ...` : mName}</h5>
           <img src={ele.Poster} className="card-img-top img-fluid" alt={ele.imdbID}/>
           <div className="card-body">
           <h3 className="card-text text-info text-center">Type : {ele.Type}</h3>
           <h3 className="card-text text-info text-center">Year : {ele.Year}</h3>
 
           </div>
           </div>
           </NavLink>
          </div>
        })
      }
        </div>
        <div><h6 className='text-center text-white mt-2'>Created by <span className='text-danger fw-bold'>Amann</span></h6></div>
      </div>
      
    </>
  )
}

export default Movies