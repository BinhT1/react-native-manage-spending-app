import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#00aff0',
  textPrimary: '#000000',
  textSecondary: '',
  red: '#f05261',
  green: '#2cb84b',
};

export const gStyles = StyleSheet.create({
  textS12W400: {
    fontSize: 12,
    fontWeight: 400,
  },
  textS14W400: {
    fontSize: 14,
    fontWeight: 400,
  },
  textS16W400: {
    fontSize: 16,
    fontWeight: 400,
  },
  textS16W600: {
    fontSize: 16,
    fontWeight: 600,
  },
  textS18W600: {
    fontSize: 18,
    fontWeight: 600,
  },
  textS20W600: {
    fontSize: 20,
    fontWeight: 600,
  },
  text24S700: {
    fontSize: 24,
    fontWeight: 700,
  },
  flexRowNoneCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetweenCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  flexColumnBetweenNone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
