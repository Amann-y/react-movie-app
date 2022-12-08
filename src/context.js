import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = createContext()

const AppProvider = ({children})=>{

    const [isLoading,setIsLoading] = useState(true)
    const [movie,setMovie] = useState([])
    const [isError,setIsError] = useState({show:'false', msg:""})
    const [query,setQuery] = useState('God')

    const getMovies =async(url)=>{
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response==='True') {
                setMovie(data.Search)
                setIsLoading(false)
                setIsError({show:false, msg:data.Error})
            }else{
                setIsError({show:true, msg:data.Error})
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      let timer = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        },500)
    return ()=>clearTimeout(timer)
    },[query])

return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
    {children}
</AppContext.Provider>
}

//global custom hook
const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useGlobalContext}