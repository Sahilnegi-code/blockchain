import React from 'react'

const Body = ({candidate1 , candidate2}) => {
    console.log(candidate1);
  return (
    <div className ="mt-4" style = {{textAlign:'center'}}>
    
  <h2>VOTES</h2>
  <hr style ={{width:'100%' , backgroundColor:'blue', borderWidth:'10px'}} />  
  <div>
    <div  style = {{ marginTop:'30px',justifyContent:'space-around', display:'flex'}}>
    
        <th>#</th>
        <th>Name</th>
        <th>Votes</th>
      
    </div>
    <hr style ={{ margin:'30px 0px',width:'100%' , backgroundColor:'grey',  borderWidth:'3px'}} />  
    <div style={{display:'flex', flexDirection:'column'}}>

    <div style={{display:'flex' ,justifyContent:'space-around'}}>
    <span>{candidate1.id}</span>
    <span>{candidate1.name}</span>
    <span>{candidate1.votes}</span>
    </div> 
    
  
      
    </div>
  </div>
</div>
    
  )
}

export default Body