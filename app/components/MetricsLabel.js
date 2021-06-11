import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// const Text = styled.Text`
//   font-size: 40px;
// `;

export default class MetricsLabel extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  updateInformation = () => {
    this.setState({});
  };

  render() {
    return (
      <View>
        <Text>Covid 19 Metrics</Text>
        <Text>India</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
