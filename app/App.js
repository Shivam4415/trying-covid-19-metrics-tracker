/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  Button,
  Alert,
} from 'react-native';
import CovidTracker from './screens/CovidTracker';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let url = 'https://api.covid19india.org/data.json';
    let resp = await fetch(url);
    this.setState({data: resp});
    let respJson = await resp.json();
    console.warn(respJson);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>I am running</Text>
        <Button
          type="button"
          title="GetData"
          onPress={() => Alert.alert('I am pressed')}
        />
      </SafeAreaView>
    );
  }
}

export default App;
