import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {setRestaurants} from '../store/restaurants';
import {MapMyView} from './';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Chalkduster',
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'center',
  },
});

export class RestaurantsView extends React.Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants || [];
    return (
      <View style={styles.container}>
        <View className="rest" style={{flex: 0.75}}>
          {restaurants.map((rest, idx) => {
            return (
              <Text
                style={styles.title}
                key={idx}
                onPress={() => Linking.openURL(rest.url)}>
                {rest.name}
              </Text>
            );
          })}
        </View>

        <MapMyView restaurants={restaurants} />
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
