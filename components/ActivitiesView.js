import React from 'react';
import {View, Text, Linking} from 'react-native';
import {connect} from 'react-redux';
import {setActivities} from '../store/activities';

export class ActivitiesView extends React.Component {
  componentDidMount() {
    this.props.getActivities();
  }

  render() {
    const activities = this.props.activities || [];
    return (
      <View className="act">
        {activities.map((act, idx) => {
          return (
            <Text key={idx} onPress={() => Linking.openURL(act.url)}>
              {act.name}
            </Text>
          );
        })}
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
