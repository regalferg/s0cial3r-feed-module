import React from 'react'
import "./FeedCard.css";




const FeedCard = props => (


  
  // <div className={props.shake}>
  <div className='card '>
  <img alt={props.link} src={props.link} onClick={() => props.openModal(props.id)}   className="imagez card-img" />
    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
      
   
    {/* <div className="content"> */}
      <ul>
        <li>
          <strong>Posted By:</strong> {props.poster}
        </li>
      
      
      </ul>
      </div>
    {/* </div> */}
    </div>
  // </div>



);






export default FeedCard;