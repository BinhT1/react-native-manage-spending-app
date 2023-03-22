import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fa5icons from 'react-native-vector-icons/FontAwesome5';
import {Colors, TextStyles} from '../global/global';
import FocusStatusBar from '../components/share/focusStatusBar';
import {Utils} from '../utils/utils';

const dataHome = {
  name: 'Nguyễn Bá Bình',
  tongsodu: '1000000',
};

export default function Home() {
  return (
    <View>
      <FocusStatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"></FocusStatusBar>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.header_first}>
            <View>
              <Text style={{...TextStyles.textS18W600, color: 'white'}}>
                Chào {dataHome.name} !
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Pressable onPress={() => {}}>
                <Ionicons name="sync" color="white" size={22}></Ionicons>
              </Pressable>
              <Pressable onPress={() => {}} style={{marginLeft: 20}}>
                <Fa5icons name="bell" color="white" size={22}></Fa5icons>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.tongsodu_container}>
          <View style={styles.tongsodu_section}>
            <Pressable onPress={() => {}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    ...TextStyles.textS14W400,
                  }}>
                  Tổng số dư
                </Text>
                <Ionicons name="chevron-forward" size={20} />
              </View>
              <View style={{marginTop: 4}}>
                <Text style={{...TextStyles.text24S700, color: Colors.primary}}>
                  {Utils.formatNumber(dataHome.tongsodu)} đ
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Ionicons name="eye" size={30}></Ionicons>
            </Pressable>
          </View>
        </View>
        <View style={styles.tinhhinhthuchi_container}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{...TextStyles.textS16W600, color: Colors.textPrimary}}>
              Tình hình thu chi
            </Text>

            <Pressable onPress={() => {}}>
              <Ionicons name="settings-sharp" size={20}></Ionicons>
            </Pressable>
          </View>
          <View></View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingLeft: 15,
    paddingRight: 20,
  },
  header_first: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tongsodu_container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  tongsodu_section: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinhhinhthuchi_container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
