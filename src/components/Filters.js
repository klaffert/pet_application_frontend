// import React from "react";

// class Filters extends React.Component {

//  constructor(props) {
//    super(props)
 
//    this.state = {
//     gender: "",
//     size: "",
//     age: "",
//     filteredPets: this.props.pets
//    }
//  }
 


//   handleClick = () => {
//     this.props.onFilterPets()
//   }

//   handleUpdateGender = (e) => {

//     // this.props.onUpdateGender(e)
//   }

//   handleChange = (event) => {
//     this.setState ({
//       filteredPets: this.state.filteredPets.filter(pet => pet.gender === event.target.value)
//      })
//   }

//   handleSubmit = (event) => {
    
//   }

//   render() {
    
//     return (
//   //     <div>
//   //     <div>
//   //     <select
//   //       className="ui selection dropdown"
//   //       onChange={this.handleChange}
//   //     >
//   //       <option value="">Filter by Gender...</option>
//   //       <option value="female">Female</option>
//   //       <option value="male">Male</option>
//   //     </select>
//   //   </div>
    
//   //   <div>
//   //   <select
//   //     className="ui selection dropdown"
//   //     onChange={this.handleChange}
//   //   >
//   //     <option value="">Filter by Size...</option>
//   //     <option value="small">Small</option>
//   //     <option value="Medium">Medium</option>
//   //     <option value="Large">Large</option>
//   //     <option value="xLarge">X-Large</option>
//   //   </select>
//   // </div>

//   // <div>
//   //   <select
//   //     className="ui selection dropdown"
//   //     onChange={this.handleChange}
//   //   >
//   //     <option value="">Filter by Age...</option>
//   //     <option value="baby">Baby</option>
//   //     <option value="young">Young</option>
//   //     <option value="adult">Adult</option>
//   //     <option value="senior">Senior</option>
//   //   </select>
//   // </div>
//   // </div>
//     );
//   }
// }

// export default Filters;