import { hp, wp } from './utils/get_screen_dimensions';

export const size = {
  text: {
    xsmall: hp(1.2),
    small: hp(1.6),
    body: hp(2.0),
    regular: hp(2.4),
    lg: hp(3.2),
    xl: hp(4.0),
    xxl: hp(4.8),
  },
  height: {
    xl: hp(6.4),
    lg: hp(5.6),
    regular: hp(4.8),
    md: hp(4.0),
    sm: hp(3.2),
    xs: hp(2.4),
    xxs: hp(1.6),
  },
  width: {
    xsmall: wp(20),
    small: wp(40),
    regular: wp(50),
    lg: wp(75),
    xl: wp(90),
    xxl: wp(100),
  },
};

export const color = {
  Primary: '#003A9B',
  Secondary: '#001C40',
  white: '#ffffff',
};
