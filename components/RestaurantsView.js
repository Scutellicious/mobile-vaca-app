import React from 'react';
import {View, Text, Linking} from 'react-native';
import {connect} from 'react-redux';
import {setRestaurants} from '../store/restaurants';

export class RestaurantsView extends React.Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants || [];
    return (
      <View className="rest">
        {restaurants.map((rest, idx) => {
          return (
            <Text key={idx} onPress={() => Linking.openURL(rest.url)}>
              {rest.name}
            </Text>
          );
        })}
      </View>
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
    getRestaurants: () => dispatch(setRestaurants()),
  };
};

export default connect(mapState, mapDispatch)(RestaurantsView);
