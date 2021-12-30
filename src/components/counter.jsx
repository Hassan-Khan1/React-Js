import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count : 0,
    // ImageUrl : 'https://picsum.photo/200'
    tags : []
  };


//   rendertags(){
//     if (this.state.tags.length ===0 ) return <p>There are no tags!</p>
//     return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}</ul>
//   }

//   render(){
//     return <div>
//     { this.state.tags.length === 0  &&  "Please  create a new tag!"}
//       {this.rendertags()}
//     </div>;
//   }
// }



  handleincrement = product => {
    // console.log("Increment Clicked!",this)
    // this.state.count++;

    console.log(product);
    this.setState({count:this.state.count + 1});
  };

  dohandleIncrement = () =>{
    this.handleincrement({id:1});
  };

  render() { 
    return (
    <div>
      {/* <img src={this.state.ImageUrl} alt='' /> */}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button 
      onClick={this.dohandleIncrement}
      className='btn btn-secondary btn-sm'
      >
      Increments
      </button>

      <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}</ul>

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
