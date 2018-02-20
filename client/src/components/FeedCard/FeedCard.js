import React from 'react'
import "./FeedCard.css";




const FeedCard = props => (


  
  // <div className={props.shake}>
  <div className='card '>
  <img alt={props.link} src={props.link}  className="imagez card-img openModal" />
    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end" >
      
   
      <ul>
        <li>
          <strong>Posted By:</strong> {props.poster}
        </li>
      
      
      </ul>
      </div>
    
    </div>
 



);


// onClick={() => props.openModal(props.id)}



export default FeedCard;