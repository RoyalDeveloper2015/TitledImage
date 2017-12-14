//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'
//  Props 
/**
 * @Props
 * 
 * title
 * titleColor
 * uri
 */
// create a component
class TitledImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uri: props.uri || ''
    }
  }
  componentWillReceiveProps (props) {
    this.setState({uri: props.uri})
  }
  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <Image source={{uri: this.state.uri}} style={[styles.image, {color: this.props.titleColor}]}></Image>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}



//make this component available to the app
export default TitledImage;
