import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { size } from '~/lib/global';

type InputProps = {
  placeholder: string;
  keyboardType?: 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: object;
  onChangeText: (text: string) => void;
  classname?: string;
  labelClassName?: string;
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  placeholderTextColor?: string;
};

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  onChangeText,
  classname,
  labelClassName,
  label,
  icon,
  iconColor,
  placeholderTextColor,
}: InputProps) => {
  return (
    <View className="flex">
      {label ? (
        <Text
          className={`font-normal text-text mb-[8] ${labelClassName}`}
          style={{ fontSize: size.text.small }}>
          {label}
        </Text>
      ) : null}
      <View
        className={`w-full flex-row justify-start items-center gap-x-[16] bg-gray-50 border border-gray-200 rounded-[8] ${classname}`}
        style={{ height: size.height.xl, paddingHorizontal: size.height.xxs }}>
        {icon ? <Ionicons name={icon} size={16} color={iconColor ? iconColor : 'black'} /> : null}
        <TextInput
          className={`w-full`}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#A1A1AA'}
          style={[style, { fontSize: size.text.small }]}
          keyboardType={keyboardType ? keyboardType : 'default'}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default Input;
