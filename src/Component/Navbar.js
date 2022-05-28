import React from 'react'

const Navbar = ({accounts}) => {
  return (
    <nav class="navbar" style={{ height:'50px' ,backgroundColor:'black', color :'white'}}> 
    <span >Voting Dapps</span>
    <span >{accounts}</span>
    </nav>
  )
}

export default Navbar