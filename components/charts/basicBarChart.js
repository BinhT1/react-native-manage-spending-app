import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

function BasicBarChart({income, outcome, maxH}) {
  const outcomeHeight = Math.floor((outcome / income) * maxH);
  const incomeHeight = Math.floor((income / outcome) * maxH);
  if (income > outcome) {
    return (
      <View style={styles.container}>
        <View style={{...styles.income, height: maxH}}></View>
        <View style={{...styles.outcome, height: outcomeHeight}}></View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{...styles.income, height: incomeHeight}}></View>
        <View style={{...styles.outcome, height: maxH}}></View>
      </View>
    );
  }
}

BasicBarChart.propTypes = {
  income: PropTypes.number,
  outcome: PropTypes.number,
  maxH: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  income: {
    backgroundColor: '#2cb84b',
    width: 40,
  },
  outcome: {
    backgroundColor: '#f05261',
    width: 40,
  },
});
export default BasicBarChart;
