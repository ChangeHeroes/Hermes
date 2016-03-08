/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class Hermes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daInput: 'Lookie Here'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Can Has Input?
        </Text>
        <TextInput
          style={styles.daInput}
          value={this.state.daInput}
          onChangeText={text => this.inputChange({text})}
        />
        <Text style={styles.title}>{this.state.daInput}</Text>
      </View>
    );
  }

  inputChange(text) {
    this.setState({
      daInput: text.text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  daInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  }
});

AppRegistry.registerComponent('Hermes', () => Hermes);
