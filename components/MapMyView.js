import MapView from 'react-native-maps';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class MapMyView extends React.Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 36.162663,
          longitude: -86.781601,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    );
  }
}

// const MapMyView = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}></MapView>
//     </View>
//   );
// };

// export default MapMyView;
// import React from 'react';
// import {View, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {setActivities} from '../store/activities';

// export class ActivitiesView extends React.Component {
//   componentDidMount() {
//     this.props.getActivities();
//   }

//   render() {
//     const activities = this.props.activities || [];
//     return (
//       <View className="act">
//         {activities.map((act, idx) => {
//           return (
//             <Text key={idx}>
//               <Text h3>{act}</Text>
//             </Text>
//           );
//         })}
//       </View>
//     );
//   }
// }
