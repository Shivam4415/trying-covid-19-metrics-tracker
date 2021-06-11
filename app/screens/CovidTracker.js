import React from 'react';
import {StyleSheet, View} from 'react-native';
import MetricsInformation from '../components/MetricsInformation';
import MetricsLabel from '../components/MetricsLabel';
import axios from 'axios';

export default class CovidTracker extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getApiData();
  }
  async getApiData() {
    let url = 'https://api.covid19india.org/data.json';
    let resp = await fetch(url);
    //this.setState({data: resp});
    let respJson = await resp.json();
    console.warn(respJson);
  }
  render() {
    return (
      <View style={styles.displayFlex}>
        {/* <MetricsLabel style={styles.boxOne} />
        <MetricsInformation style={styles.boxTwo} /> */}
        <Text>data</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayFlex: {
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
});
