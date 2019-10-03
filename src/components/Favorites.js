import React, { Component } from 'react'
import FavoritesCard from './FavoritesCard'

export class Favorites extends Component {

    state = {
        favoritePets: []
    }

    showFavoritePets = () => {
        var favoritePets = 'http://localhost:3001/favorites'

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

    componentDidMount() {
        this.showFavoritePets()
    }

    render() {
        return (
            <div>
                {this.state.favoritePets.map((pet, index) => (
                    <FavoritesCard pet={pet}/>
                )
                )}
            </div>
        )
    }
}

export default Favorites
