import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import FocusStatusBar from '../components/share/focusStatusBar';
import {Colors, gStyles} from '../global/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fa5icons from 'react-native-vector-icons/FontAwesome5';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

export default function Account() {
  const [headerSearch, setHeaderSearch] = useState(false);

  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'tai_khoan', title: 'Tài khoản'},
    {key: 'so_tiet_kiem', title: 'Sổ tiết kiệm'},
    {key: 'tich_luy', title: 'Tích luỹ'},
  ];

  const TabIndicator = ({width, tabWidth, index}) => {
    const marginLeftRef = useRef(
      new Animated.Value(index ? tabWidth : 0),
    ).current;
    useEffect(() => {
      Animated.timing(marginLeftRef, {
        toValue: tabWidth,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, [tabWidth]);
    return (
      <Animated.View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
          width: width,
          transform: [{translateX: marginLeftRef}],
          // marginLeft: marginLeftRef,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#50b0ea', '#80a2ed', '#a797f2', '#e981f4']}
          style={{height: 2, width: '100%'}}
        />
      </Animated.View>
    );
  };

  const renderIndicator = useCallback(
    ({getTabWidth}) => {
      const tabWidth = _.sum([...Array(index).keys()].map(i => getTabWidth(i)));
      return (
        <TabIndicator
          width={getTabWidth(index)}
          tabWidth={tabWidth}
          index={index}
        />
      );
    },
    [index],
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{textTransform: 'uppercase', color, ...gStyles.textS16W400}}>
          {route.title}
        </Text>
      )}
      renderIndicator={renderIndicator}
      activeColor={Colors.primary}
      inactiveColor={Colors.textSecondary}
      style={{backgroundColor: '#f7f7f7'}}
      pressColor="#f7f7f7"
    />
  );

  const TaiKhoanRoute = () => (
    <View style={styles.routeContainer}>
      <Text>Tài khoản</Text>
    </View>
  );
  const SoTietKiemRoute = () => (
    <View style={styles.routeContainer}>
      <Text>Sổ tiết kiệm</Text>
    </View>
  );
  const TichLuyRoute = () => (
    <View style={styles.routeContainer}>
      <Text>Tích luỹ</Text>
    </View>
  );

  const renderScene = SceneMap({
    tai_khoan: TaiKhoanRoute,
    so_tiet_kiem: SoTietKiemRoute,
    tich_luy: TichLuyRoute,
  });

  return (
    <View style={{flex: 1}}>
      <FocusStatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"></FocusStatusBar>
      <View>
        {headerSearch ? (
          <View style={styles.headerSearch}>
            <View style={{position: 'relative', flexGrow: 1}}>
              <View>
                <TextInput
                  placeholder="Tìm kiếm theo tên..."
                  placeholderTextColor={Colors.textPlaceholder}
                  style={styles.headerInput}></TextInput>
              </View>
              <View style={{position: 'absolute', top: 7, left: 6}}>
                <Ionicons
                  name="search"
                  color={Colors.textPlaceholder}
                  size={20}></Ionicons>
              </View>
            </View>
            <View style={{position: 'absolute', right: 20, top: 10}}>
              <Pressable
                onPress={() => {
                  setHeaderSearch(false);
                }}>
                <Text style={{...gStyles.textS16W400, color: 'white'}}>
                  Huỷ
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.header}>
            <View style={{}}>
              <Pressable
                onPress={() => {
                  setHeaderSearch(true);
                }}>
                <Ionicons name="search" color="white" size={24}></Ionicons>
              </Pressable>
            </View>
            <View style={{}}>
              <Text style={{...gStyles.textS18W600, color: 'white'}}>
                Tài khoản
              </Text>
            </View>
            <View>
              <Ionicons name="options" color="white" size={24}></Ionicons>
            </View>
          </View>
        )}

        <View style={{height: '100%'}}>
          <TabView
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSearch: {
    backgroundColor: Colors.primary,
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 60,
    position: 'relative',
  },
  headerInput: {
    backgroundColor: '#029cd8',
    paddingVertical: 2,
    fontSize: 17,
    paddingLeft: 30,
    color: 'white',
  },
  routeContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
