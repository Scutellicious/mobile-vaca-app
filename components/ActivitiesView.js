import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {setActivities} from '../store/activities';
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
export class ActivitiesView extends React.Component {
  componentDidMount() {
    this.props.getActivities();
  }

  render() {
    const activities = this.props.activities || [];
    return (
      <View style={styles.container}>
        <View className="act" style={{flex: 0.75}}>
          {activities.map((act, idx) => {
            return (
              <Text
                style={styles.title}
                key={idx}
                onPress={() => Linking.openURL(act.url)}>
                {act.name}
              </Text>
            );
          })}
        </View>
        <MapMyView />
      </View>
    );
  }
}

const mapState = state => {
  return {
    activities: state.activities,
  };
};

const mapDispatch = dispatch => {
  return {
    getActivities: () => dispatch(setActivities()),
  };
};

export default connect(mapState, mapDispatch)(ActivitiesView);
