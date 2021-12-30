import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count : 0,
    // ImageUrl : 'https://picsum.photo/200'
    tags : ['tags1','tags2','tags3']
  };


  render() { 
    return (
    <div>
      {/* <img src={this.state.ImageUrl} alt='' /> */}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className='btn btn-secondary btn-sm'>Increments</button>

      <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}
      </ul>

    </div>
    );
  }
  getBadgeClasses() {
    let classes=  "badge m-2 badge-";
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount(){
    const {count} = this.state;
    return count === 0 ?  "Zero" : count;
  }

} 
export default Counter ;
