import React from 'react';
import {Link, withRouter} from 'react-router';
import Slider from 'react-slick';
import EventIndexItem from '../event/event_index_item';

const CATEGORY = [ 'book', 'furniture', 'clothing', 'food', 'toys', 'music', 'accessories&jewlery', 'dishware', 'arts&crafts', 'other']

class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.settings = {
      autoplay: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  handleClick(e){
    e.preventDefault();
    const id = e.currentTarget.name;
    this.props.router.push(`api/categories/${id}/${CATEGORY[id]}`)
  }

  displayEventCards(){
    if (typeof this.props.events!== 'undefined'){
      let events = this.props.events.slice(0,15);
      return (
        <ul>
          {events.map( (event, index) => (
            <li key={index}><Link to={`events/${event.id}`}><EventIndexItem event={event}/></Link></li>
          ))}
        </ul>
      )
    }
  }

  render(){
    return (
      <div className="splash-page-main-content">
        <Slider {...this.settings}>
          <div className="image-slideshow clearfix" style={{backgroundImage:  'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_460,w_1270/v1481519518/photo-1470309864661-68328b2cd0a5_wt4h42.jpg)'}}></div>
          <div className="image-slideshow clearfix" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_460,w_1270/v1481519525/photo-1470305585628-a7d2cb18efa2_kc0akf.jpg)'}}></div>
          <div className="image-slideshow clearfix" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_460,w_1270/v1481519515/photo-1422919869950-5fdedb27cde8_gvqs9l.jpg)'}}></div>
        </Slider>
        <div className="site-infobox">
          <div className="site-info">
            <h1>Find local events</h1>
            <h2>Support your neighborhood garage sale or fundraiser</h2>
          </div>
        </div>
        <div className="eventCard-events">
          <h3>Popular Events</h3>
            {this.displayEventCards()}
        </div>
        <h3>Browse by Top Categories</h3>
        <div className="category-browse">
          <div className="row1">
            <Link to='/api/categories/4/clothing'
              name="4" className="category-mini"
              style={{backgroundImage: 'url( http://res.cloudinary.com/psia12345/image/upload/c_scale,w_700/v1478499010/photo-1445205170230-053b83016050_ujlcre.jpg)'}} value="clothing" onClick={this.handleClick}>
              <h4>Clothing</h4>
              <p>Basic to clothings for special occassions</p>
            </Link>
            <Link to='/api/categories/6/toys' name="6" className="category-long" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_700/v1478502925/No-Stuffed-Animals-for-Christmas_haswfc.jpg)'}}>
              <h4>Toys</h4>
            </Link>
          </div>
          <div className="row2">
            <Link to='/api/categories/5/food' name='5' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_350/v1478500853/cookies733_kmh6pt.jpg)'}}>
              <h4>Food</h4>
            </Link>
            <Link to='/api/categories/1/books' name='1' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_350/v1478499007/photo-1463320726281-696a485928c7_vdpime.jpg)'}}>
              <h4>Books</h4>
            </Link>
            <Link to='/api/categories/7/music' name='7' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_350/v1478502931/slide_359089_3998500_free_qrrrlq.jpg)'}}>
              <h4>Music</h4>
            </Link>
          </div>
          <div className="row3">
            <Link to='/api/categories/8/jewelry&amp;accessories' name='8' className="category-long" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_700/v1478688077/KMA_2526_n9khen.jpg)'}}>
              <h4>Jewlery & Accessories</h4>
            </Link>
            <Link to='/api/categories/9/dishware' name='9' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_250,w_350/v1478687992/plates-dishware_q8dk68.jpg)'}}>
              <h4>Dishware</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
