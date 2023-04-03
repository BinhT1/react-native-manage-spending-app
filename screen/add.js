import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors, gStyles} from '../global/global';
import FocusStatusBar from '../components/share/focusStatusBar';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fa5icons from 'react-native-vector-icons/FontAwesome5';
export default function Add() {
  const modal1List = [
    {label: 'Thu Tiền', value: 'thu', icon: ''},
    {label: 'Chi Tiền', value: 'chi', icon: ''},
  ];
  const [modal1Value, setModal1Value] = useState(modal1List[0]);
  const [showModal1, setShowModal1] = useState(false);
  return (
    <View>
      <FocusStatusBar backgroundColor={Colors.primary}></FocusStatusBar>
      <View style={styles.header}>
        <View style={{alignSelf: 'center'}}>
          <Pressable
            style={{...styles.buttonModal1, ...gStyles.flexRowCenterCenter}}
            onPress={() => setShowModal1(!showModal1)}>
            <View>
              <Text
                style={{
                  ...gStyles.textS20W600,
                  color: 'white',
                  textAlign: 'center',
                }}>
                {modal1Value.label}
              </Text>
            </View>
            <View style={{marginLeft: 6}}>
              <Fa5icons name="caret-down" size={24} color="white"></Fa5icons>
            </View>
          </Pressable>
        </View>
        <View></View>
      </View>
      <Modal isVisible={showModal1} style={styles.modal1}>
        <View>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  buttonModal1: {
    backgroundColor: '#33bff4',
    borderWidth: 0,
    width: 150,
    paddingVertical: 4,
    borderRadius: 20,
  },
  modal1: {
    backgroundColor: 'white',
  },
});
