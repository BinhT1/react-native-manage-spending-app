import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  processColor,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fa5icons from 'react-native-vector-icons/FontAwesome5';
import {Colors, gStyles} from '../global/global';
import FocusStatusBar from '../components/share/focusStatusBar';
import {Utils} from '../utils/utils';
import DropDownPicker from 'react-native-dropdown-picker';
import BasicBarChart from '../components/charts/basicBarChart';
import {PieChart} from 'react-native-charts-wrapper';
import Realm from 'realm';

const dataHome = {
  name: 'Nguyễn Bá Bình',
  tongsodu: '1000000',
  thu: '5000000',
  chi: '4000000',
  list: [
    {
      id: '1',
      icon: 'icon',
      category: {
        id: '1',
        name: 'Biếu tặng',
      },
      parentCategory: {
        id: '1',
        name: 'Hiếu hỉ',
      },
      description: 'Tiêu tết',
      money: '230000',
      wallet: {
        id: 1,
        name: 'Bình',
      },
      dateTime: '31/01/2023',
    },
    {
      id: '2',
      icon: 'icon',
      category: {
        id: '1',
        name: 'Biếu tặng',
      },
      parentCategory: {
        id: '1',
        name: 'Hiếu hỉ',
      },
      description: 'Ông bà, bố mẹ',
      money: '600000',
      wallet: {
        id: 1,
        name: 'Bình',
      },
      dateTime: '31/01/2023',
    },
    {
      id: '3',
      icon: 'icon',
      category: {
        id: '2',
        name: 'Đi chợ/ mua sắm/ siêu thị',
      },
      categoryParent: {
        id: '2',
        name: 'Mua sắm',
      },

      description: 'Mua bao lì xì',
      money: '40000',
      wallet: {
        id: 1,
        name: 'Bình',
      },
      dateTime: '31/01/2023',
    },
  ],
};
const dataPieChart = [
  {value: 1350000, label: 'Hiếu hỉ'},
  {value: 727000, label: 'Ăn uống'},
  {value: 518000, label: 'Mua sắm'},
  {value: 295000, label: 'Đi lại'},
  {value: 250000, label: 'Khác'},
];

const dropdown1Items = [
  {label: 'Hôm nay', value: 'today'},
  {label: 'Tuần này', value: 'week'},
  {label: 'Tháng này', value: 'month'},
  {label: 'Quý này', value: 'quarter'},
  {label: 'Năm này', value: 'year'},
];

export default function Home() {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [valueDropdown1, setValueDropdown1] = useState(dropdown1Items[0].value);
  return (
    <View>
      <FocusStatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"></FocusStatusBar>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.header_first}>
            <View>
              <Text style={{...gStyles.textS18W600, color: 'white'}}>
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
                    ...gStyles.textS14W400,
                  }}>
                  Tổng số dư
                </Text>
                <Ionicons name="chevron-forward" size={20} />
              </View>
              <View style={{marginTop: 4}}>
                <Text style={{...gStyles.text24S700, color: Colors.primary}}>
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
              ...gStyles.flexRowNoneCenter,
              justifyContent: 'space-between',
            }}>
            <Text style={{...gStyles.textS16W600, color: Colors.textPrimary}}>
              Tình hình thu chi
            </Text>

            <Pressable onPress={() => {}}>
              <Ionicons name="settings-sharp" size={20}></Ionicons>
            </Pressable>
          </View>
          <View>
            <DropDownPicker
              open={openDropdown1}
              value={valueDropdown1}
              items={dropdown1Items}
              setOpen={setOpenDropdown1}
              setValue={setValueDropdown1}
              autoScroll={false}
              style={styles.dropdown1}
              dropDownDirection={'BOTTOM'}
              zIndex={100}
              containerStyle={styles.dropdown1_container}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              zIndex: -1,
              display: 'flex',
              flexDirection: 'row',
              marginTop: 8,
              height: 100,
            }}>
            <View style={{flex: 1}}>
              <BasicBarChart
                income={parseInt(dataHome.thu)}
                outcome={parseInt(dataHome.chi)}
                maxH={100}></BasicBarChart>
            </View>
            <View
              style={{
                flex: 2,
                ...gStyles.flexColumnBetweenNone,
                marginTop: 8,
              }}>
              <View>
                <View style={gStyles.flexRowBetweenCenter}>
                  <View style={gStyles.flexRowNoneCenter}>
                    <Ionicons name="ellipse" color={Colors.green}></Ionicons>
                    <Text
                      style={{
                        ...gStyles.textS16W400,
                        color: Colors.textPrimary,
                        marginLeft: 4,
                      }}>
                      Thu
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        ...gStyles.textS16W600,
                        color: Colors.green,
                      }}>
                      {Utils.formatNumber(dataHome.thu)} đ
                    </Text>
                  </View>
                </View>
                <View style={gStyles.flexRowBetweenCenter}>
                  <View style={{...gStyles.flexRowNoneCenter, marginTop: 4}}>
                    <Ionicons name="ellipse" color={Colors.red}></Ionicons>
                    <Text
                      style={{
                        ...gStyles.textS16W400,
                        color: Colors.textPrimary,
                        marginLeft: 4,
                      }}>
                      Chi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        ...gStyles.textS16W600,
                        color: Colors.red,
                        marginTop: 4,
                      }}>
                      {Utils.formatNumber(dataHome.chi)} đ
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 8,
                    borderBottomColor: '#ececec',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    ...gStyles.textS16W600,
                    color: Colors.textPrimary,
                  }}>
                  {Utils.formatNumber(parseInt(dataHome.thu - dataHome.chi))} đ
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, zIndex: -1}}>
            <PieChart
              style={{flex: 1}}
              logEnabled={true}
              chartBackgroundColor={processColor('white')}
              chartDescription={{
                text: '', // mô tả của chart
                textSize: 15,
                textColor: processColor('darkgray'),
              }}
              data={{
                dataSets: [
                  {
                    values: dataPieChart,
                    label: '',
                    config: {
                      colors: [
                        processColor('#ffbe38'),
                        processColor('#01aef2'),
                        processColor('#9c7be4'),
                        processColor('#34c09d'),
                        processColor('#f05261'),
                      ],
                      valueTextSize: 14,
                      valueTextColor: processColor('black'),
                      sliceSpace: 5,
                      selectionShift: 13,
                      // xValuePosition: "OUTSIDE_SLICE",
                      // yValuePosition: "OUTSIDE_SLICE",
                      valueFormatter: "#.#'%'",
                      valueLineColor: processColor('green'),
                      valueLinePart1Length: 0.5,
                    },
                  },
                ],
              }}
              legend={{
                enabled: true,
                textSize: 16,
                form: 'CIRCLE',
                horizontalAlignment: 'RIGHT',
                verticalAlignment: 'CENTER',
                orientation: 'VERTICAL',
                wordWrapEnabled: true,
              }}
              highlights={[{x: 0}]}
              extraOffsets={{left: 0, top: 0, right: 20, bottom: 0}}
              entryLabelColor={processColor('green')}
              // entryLabelTextSize={20} // lable của dataSet,  drawEntryLabels={true} thì mới có thể sử dụng
              // entryLabelFontFamily={'HelveticaNeue-Medium'}
              drawEntryLabels={false}
              rotationEnabled={false}
              rotationAngle={45}
              usePercentValues={true}
              styledCenterText={{
                text: '', // chữ ở chính giữa vòng tròn
                color: processColor('pink'),
                fontFamily: 'HelveticaNeue-Medium',
                size: 20,
              }}
              centerTextRadiusPercent={100}
              holeRadius={20}
              holeColor={processColor('#f0f0f0')}
              transparentCircleRadius={20}
              transparentCircleColor={processColor('#f0f0f088')}
              maxAngle={360}
            />
          </View>

          <View
            style={{
              ...gStyles.flexRowNoneCenter,
              justifyContent: 'flex-end',
            }}>
            <Pressable onPress={() => {}}>
              <Text
                style={{
                  ...gStyles.textS16W400,
                  color: Colors.primary,
                  marginBottom: 10,
                }}>
                Lịch sử ghi chép
                <Ionicons name="chevron-forward" size={16}></Ionicons>
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{...gStyles.textS18W600, color: Colors.textPrimary}}>
              Ghi chép gần đây
            </Text>
          </View>
          <View>
            {dataHome.list.map((item, index) => {
              return (
                <Pressable key={index} onPress={() => {}}>
                  <View
                    style={{...gStyles.flexRowBetweenCenter, paddingTop: 10}}>
                    <View style={{...gStyles.flexRowNoneCenter}}>
                      <View style={{paddingRight: 8}}>
                        <Fa5icons name="gift" size={40}></Fa5icons>
                      </View>
                      <View>
                        <Text
                          style={{
                            ...gStyles.textS18W600,
                            color: Colors.textPrimary,
                          }}>
                          {item.category.name}
                        </Text>
                        <Text
                          style={{...gStyles.textS16W400, fontStyle: 'italic'}}>
                          {item.description}
                        </Text>
                        <Text style={{...gStyles.textS16W400}}>
                          {item.dateTime}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{...gStyles.textS18W400, color: Colors.red}}>
                          {Utils.formatNumber(item.money)} đ
                        </Text>
                      </View>
                      <View
                        style={{
                          ...gStyles.flexRowEndCenter,
                        }}>
                        <Fa5icons name="wallet" size={18}></Fa5icons>
                        <Text style={{...gStyles.textS16W400, paddingLeft: 4}}>
                          {item.wallet.name}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View style={{...gStyles.flexRowEndCenter, paddingTop: 8}}>
            <Pressable onPress={() => {}}>
              <Text style={{...gStyles.textS16W400, color: Colors.primary}}>
                Xem ghi chép
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 0,
    height: 500,
  },
  dropdown1: {
    width: 130,
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  dropdown1_container: {
    width: 150,
  },
});
