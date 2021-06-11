import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomButton from './CustomButton';
import {If} from './If';
// const Text = styled.Text`
//   font-size: 40px;
// `;

export default class MetricsInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      failureOccured: false,
      showLoading: true,
      showData: false,
    };
  }

  updateInformation = () => {
    this.setState({});
  };

  render() {
    return (
      <View>
        <Text>I am loaded</Text>
        {/* <If show={this.state.failureOccured}>
          <Text>Some failure occured!</Text>
          <CustomButton onPress={this.updateInformation} />
        </If>
        <If show={this.state.showLoading}>
          <Text>Loading</Text>
        </If>
        <If show={this.state.showData}>
          <Text>Data</Text>
        </If> */}
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
