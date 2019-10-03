import React from "react";
import PetBrowser from "./PetBrowser";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      type: "",
      location: ""
    };
  }

  updatePetType = event => {
    this.setState({
      type: event.target.value
    });
  };

  updateLocation = event => {
    this.setState({
      location: event.target.value
    });
  };

  getPets = event => {
    event.preventDefault();

    const data = this.state.type;
    const location = this.state.location;

    fetch("http://localhost:3001/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: data,
        location: location
      })
    })
      .then(response => response.json())
      .then(json =>
        this.setState({
          pets: json.animals
        })
      );
  };

  adoptPet = id => {
    this.setState(prevState => {
      let newPets = prevState.pets;
      newPets.forEach(pet => {
        if (pet.id === id) {
          pet.isAdopted = true;
        }
      });
      console.log(newPets);
      return { pets: newPets };
    });
  };

  render() {
    return (
      <div>
        <div className="bg-img">
          <div className="container">
            <form className="ui form">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  onChange={this.updatePetType}
                >
                  <option value="">Select Pet Type...</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="horse">Horse</option>
                  <option value="bird">Bird</option>
                </select>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Zipcode"
                  onChange={this.updateLocation}
                />
              </div>

              <Link to='/pets'>
              <button type="submit" className="btn" onClick={this.getPets}>
                Find Pets
              </button>
              </Link>

            </form>
          </div>
        </div>
        <div className="twelve wide column">
          <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
        </div>
      </div>
    );
  }
}

export default HomePage;
