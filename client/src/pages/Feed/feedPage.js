import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import FeedCard from "../../components/FeedCard";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";
// import { Carousel } from 'react-responsive-carousel';
// import {Slider} from 'react-slick';
import Slider from '../../slider';


class Feed extends Component {
  state = {
    feedz: [],
    poster: "",
    link: ""
 
  };

  componentDidMount() {
    this.loadFeed();
  }

  loadFeed = () => {
    API.getFeeds()
      .then(res =>
        
        this.setState({ feedz: res.data, poster: "", link: "" })
        
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadFeed())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.poster && this.state.link) {
      API.saveFeed({
        poster: this.state.poster,
        link: this.state.link
      
      })
        .then(res => this.loadFeed())
        .catch(err => console.log(err));
    }
  };
  



  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToScroll: 1
    };


    
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
           
            <form>
              <Input
                value={this.state.poster}
                onChange={this.handleInputChange}
                name="poster"
                placeholder="poster (required)"
              />
              <Input
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="link (required)"
              />
              
              <FormBtn
                disabled={!(this.state.link && this.state.poster)}
                onClick={this.handleFormSubmit}
              >
                Submit Link
              </FormBtn>
            </form>
          </Col>
         </Row>
         <Row>
          <Col size="md-6 sm-12" >
          <Slider {...settings}>
          {/* <Carousel showArrows={true} showThumbs={false}  width="50%"  onChange={this.onChange} onClickItem={this.onClickItem} > */}
          {this.state.feedz.map(feed => (
          <div>
           <FeedCard 
            key={feed._id}
            id={feed._id}
            poster ={feed.poster} 
            link= {feed.link}
   
          />
            </div>

        ))}
  
  </Slider>
        
        {/* </Carousel> */}
       
          </Col>
          
        
        </Row>
      </Container>
    )
  }
}

export default Feed;
