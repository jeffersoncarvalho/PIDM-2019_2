import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { marker: null };
  }

  renderMarker(){
    if(!this.state.marker) return null;

    let latitude = this.state.marker.latitude;
    let longitude = this.state.marker.longitude;
    let positionStr = "("+latitude+","+longitude+")"

    console.log(longitude);

    return (
      <MapView.Marker coordinate={this.state.marker} title={positionStr}/>
    );
  }

  render() {

    //if(this.state.marker) console.log(this.state.marker)

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

          {this.renderMarker()}

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