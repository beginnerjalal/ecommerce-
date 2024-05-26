import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',height:'87vh',alignItems:'center'}}> 
       <Spinner animation="border" role="status" style={{display:'flex',justifyContent:'center',width:'50px',height:'50px'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    </>
  )
}

export default Loader 