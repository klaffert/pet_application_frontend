import React, { Component } from 'react'

export class FavoritesCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.pet.name}</p>
            </div>
        )
    }
}

export default FavoritesCard
