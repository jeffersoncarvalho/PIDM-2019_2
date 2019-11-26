import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { markers: null };
  }

  addMarker(coordinates) {
    // Remove the following line after testing, its just to show coordinates as a warning in console.
    //console.warn(coordinates);

    this.setState({
      markers: [...this.state.markers,
      { latlng: coordinates }
      ]
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: -3.7534002,
            longitude: -38.5331172,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}>
            
          {this.state.marker && <MapView.Marker coordinate={this.state.marker} />}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',

  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

});