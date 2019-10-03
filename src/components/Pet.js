import React from "react";

class Pet extends React.Component {
  showFirstPhoto = () => {
    return this.props.pet.photos.map(photo => {
      return photo.medium;
    });
  };

  addDefaultSrc(event) {
    event.target.src = "https://www.arflife.org/images/NoPetImage.jpg";
  }

  handleAdoptPetClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  };

  render() {
    const { isAdopted } = this.props.pet;
    return (
      <div class="ui card">
        <a class="header">
            {this.props.pet.gender === "Female" ? "♀" : "♂"}{" "}
            {this.props.pet.name}
          </a>
        <div class="image">
          <img src={this.showFirstPhoto()} onError={this.addDefaultSrc}/>
        </div>
        <div class="content">
          <div class="meta">
            <span class="date">{this.props.pet.breeds.primary}</span>
          </div>
          <div class="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Size: {this.props.pet.size}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={this.handleAdoptPetClick}
            >
              Favorite Pet
            </button>
          )}
        </div>
      </div>

      // <div className="ui card">
      //   <div className="content">
      //     <a className="header">
      //       {this.props.pet.gender === "Female" ? "♀" : "♂"} {name}
      //     </a>
      //     <div className="meta">
      //       <span className="date">{this.props.pet.breeds.primary}</span>
      //     </div>
      //     <div className="description">
      //       <p>Age: {age}</p>
      //       <p>Size: {size}</p>
      //     </div>
      //   </div>
      //   <div className="extra content">
      //     {isAdopted === true ? (
      //       <button className="ui disabled button">Already adopted</button>
      //     ) : (
      //       <button
      //         className="ui primary button"
      //         onClick={this.handleAdoptPetClick}
      //       >
      //         Favorite Pet
      //       </button>
      //     )}
      //   </div>
      // </div></div>
    );
  }
}

export default Pet;
