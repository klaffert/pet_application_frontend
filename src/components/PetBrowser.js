import React from "react";
import Pet from "./Pet";
import Filters from "./Filters";

var favoritesUrl = "http://localhost:3001/favorites";


class PetBrowser extends React.Component {
  state = {
    gender: "",
    size: "",
    age: "",
    filteredPets: []
  };

  updateGender = event => {
    this.setState(
      {
        gender: event.target.value
      },
      this.filterByGender
    );
  };

  filterByGender = () => {
    const newPets = this.props.pets.filter(pet => pet.gender === this.state.gender)
    this.setState({
      filteredPets: newPets 
    })
  }

  displayPets = () => {
    return this.props.pets.map((pet, index) => {
      return <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet} />;
    });
  };

  render() {
    return (
      <div>
        <Filters onUpdateGender={this.updateGender} onFilterPets={this.filterByGender} />
        <div className="ui cards">{this.displayPets()}</div>
      </div>
    );
  }
}
export default PetBrowser;
