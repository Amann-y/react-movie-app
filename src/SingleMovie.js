import React,{createContext,useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context'

const SingleMovie = () => {
    const {id} = useParams()

    const [isLoading,setIsLoading]= useState(true)
    const [movie,setMovie]= useState('')
    
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


   
    const getMovies =async(url)=>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response==='True') {
                setMovie(data)
                setIsLoading(false)
            }
                  } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      let timer = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`)
        },500)
    return ()=>clearTimeout(timer)
    },[id])

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
    
        <div className='container'>
           <div className='row'>
            <div className='col-12 mt-3'>
            <div className="card mx-auto">
          
           <img src={movie.Poster} className="card-img-top img-thumbnail" alt='pic'/>
           <div className="card-body">
           <h6 className="card-text text-dark text-center">Title : {movie.Title}</h6>
           <h6 className="card-text text-dark text-center">Movie Genre : {movie.Genre}</h6>
           <h6 className="card-text text-dark text-center">Movie Released : {movie.Released}</h6>
           <h6 className="card-text text-dark text-center">Country : {movie.Country}</h6>
          
           </div>
           <NavLink to='/' className='text-center'><button className='btn btn-danger text-center'>Go Back</button></NavLink>
           </div>
            
            </div>
           </div>
        </div>
    
  )

}

export default SingleMovie