import React from 'react';


const Friends = props => {

    return (
       <div className="friends-list">
          <h1>{props.friend.name}</h1> 
          <h3>{props.friend.age}</h3>  
          <p>{props.friend.email}</p> 
      </div>      

    )
}



export default Friends;