import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query,setQuery,isError} = useGlobalContext()
  return (
   <>
   <div className='container'>
      <div className='row'>
        <div className='col-8 mt-1 mx-auto'>
          <h2 className='text-danger text-center'>Search Your Movie!</h2>
          <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <div className="mb-3">
              
               <input type="text" className="form-control text-center fs-4" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' onChange={(e)=>setQuery(e.target.value)} value={query}/>
   
           </div>
          </form>
          <div className='error-div'>
            <h5 className='text-center text-primary'>{isError.show && isError.msg}</h5>
          </div>
        </div>
      </div>
   </div>
   </>
  )
}

export default Search