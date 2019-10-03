import React from "react";
import Pet from "./Pet";
// import Filters from "./Filters";

var favoritesUrl = "http://localhost:3001/favorites";


class PetBrowser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gender: "",
            size: "",
            age: "",
            filteredPets:[]
          };


    
    }

    showFavoritePets = () => {
        var favoritePets = 'http://localhost:3001/search'

        fetch(favoritePets)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                favoritePets: data
            })
        })
    }
  

  onAdoptPet = (pet) => {

    // const {user_id} = localStorage.user
    // var pet_string = JSON.stringify(pet)
    // debugger
      fetch(favoritesUrl, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "user_id": localStorage.user,
            "pet_id": pet
          })
        })
      }

    
  handleChange = (event) => {
      console.log("input from form",event.target.name)
    const newPets = this.props.pets.filter(pet => {
        console.log("pets data",pet.gender)
      return pet[event.target.name] === event.target.value
    })
    this.setState({
      filteredPets: newPets 
    })
   
  }



//   updateGender = event => {

//      console.log(this.props)
//     this.setState(
//       {
//         gender: event.target.value
//       },
//       this.filterByGender
//     );
//   };

//   filterByGender = () => {
//       console.log("lllllll")
//     const newPets = this.props.pets.filter(pet => {
//         console.log(pet.gender)
//       return   pet.gender === this.state.gender
//     })
//     this.setState({
//       filteredPets: newPets 
//     })
//   }

  displayPets = () => {
    return this.state.filteredPets.map((pet, index) => {
      return <Pet key={index} pet={pet} onAdoptPet={this.onAdoptPet}/>;
    });
  };

  render() {
    return (
      <div>
          <div>
      <div>
      <select
        className="ui selection dropdown"
        onChange={this.handleChange}
        name="gender"
      >
        <option value="">Filter by Gender...</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>
    
    <div>
    <select
      className="ui selection dropdown"
      onChange={this.handleChange}
      name="size"
    >
      <option value="">Filter by Size...</option>
      <option value="small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
      <option value="xLarge">X-Large</option>
    </select>
  </div>

  <div>
    <select
      className="ui selection dropdown"
      onChange={this.handleChange}
      name="age"
    >
      <option value="">Filter by Age...</option>
      <option value="Baby">Baby</option>
      <option value="Young">Young</option>
      <option value="Adult">Adult</option>
      <option value="Senior">Senior</option>
    </select>
  </div>
  </div>
        {/* <Filters onUpdateGender={this.updateGender} onFilterPets={this.filterByGender} /> */}
        <div className="ui cards">{this.displayPets()}</div>
      </div>
    );
  }
}
export default PetBrowser;
