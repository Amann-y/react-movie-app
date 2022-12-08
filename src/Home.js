import React, { useContext } from 'react'
import { AppContext ,useGlobalContext} from './context'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
  // const data = useContext(AppContext)
  // const data = useGlobalContext()
  return (
   <>
   <Search/>
   <Movies/>
   </>
  )
}

export default Home