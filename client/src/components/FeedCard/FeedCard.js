import React from 'react'
import "./FeedCard.css";




const FeedCard = props => (


  
  // <div className={props.shake}>
  <div className='card'>
  
    <div className="img-container">
      <img alt={props.link} src={props.link}  className="imagez" />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Posted By:</strong> {props.poster}
        </li>
      
      
      </ul>
    </div>
    </div>
  // </div>



);






export default FeedCard;