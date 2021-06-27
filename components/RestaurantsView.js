import React from 'react';
import {connect} from 'react-redux';
import {getRestaurants} from '../store';

export class RestaurantsView extends React.Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants || [];
    return (
      <div className="rest">
        {restaurants.map(rest => {
          return (
            <div key={rest.id}>
              <h1>{rest}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatch = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
  };
};

export default connect(mapState, mapDispatch)(RestaurantsView);
