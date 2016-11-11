import React from 'react';
import {Link, withRouter} from 'react-router';

const CATEGORY = [ 'book', 'furniture', 'clothing', 'food', 'toys', 'music', 'accessories&jewlery', 'dishware', 'arts&crafts', 'other']

class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const id = e.currentTarget.name;
    this.props.router.push(`api/categories/${id}/${CATEGORY[id]}`)
  }

  render(){
    return (
      <div>
        <h3>Browse by Top Categories</h3>
        <div className="category-browse">
          <div className="row1">
            <Link to='/api/categories/4/clothing'
              name="4" className="category-mini"
              style={{backgroundImage: 'url( http://res.cloudinary.com/psia12345/image/upload/c_scale,w_700/v1478499010/photo-1445205170230-053b83016050_ujlcre.jpg)'}} value="clothing" onClick={this.handleClick}>
              <h4>Clothing</h4>
            </Link>
            <Link to='/api/categories/6/toys' name="6" className="category-long" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/v1478501661/No-Stuffed-Animals-for-Christmas_iklo1n.jpg)'}}>
              <h4>Toys</h4>
            </Link>
          </div>
          <div className="row2">
            <Link to='/api/categories/5/food' name='5' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/c_scale,h_300/v1478502926/Lemonade-Stand-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com31_junxai.jpg)'}}>
              <h4>Food</h4>
            </Link>
            <Link to='/api/categories/1/books' name='1' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/v1478499007/photo-1463320726281-696a485928c7_vdpime.jpg)'}}>
              <h4>Books</h4>
            </Link>
            <Link to='/api/categories/7/music' name='7' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/v1478499006/photo-1460058418905-d61a1b4a55fe_rpfqmf.jpg)'}}>
              <h4>Music</h4>
            </Link>
          </div>
          <div className="row3">
            <Link to='/api/categories/8/jewelry&amp;accessories' name='8' className="category-long" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/v1478688077/KMA_2526_n9khen.jpg)'}}>
              <h4>Jewlery & Accessories</h4>
            </Link>
            <Link to='/api/categories/9/dishware' name='9' className="category-mini" style={{backgroundImage: 'url(http://res.cloudinary.com/psia12345/image/upload/v1478687992/plates-dishware_q8dk68.jpg)'}}>
              <h4>Dishware</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);



// <div className="cell">
//   <div className="post-card-header">
//     <p></p>
//   </div>
//   <div className="post-card-body">
//
//
//   </div>
//   <div className="post-card-footer">
//
//   </div>
// </div>
