import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

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
}: InputProps) => {
  return (
    <View className="flex">
      {label ? (
        <Text className={`font-normal text-lg text-text mb-[8] ${labelClassName}`}>{label}</Text>
      ) : null}
      <View
        className={`w-full flex-row justify-start items-center gap-x-[16] px-[16] h-[60px] bg-neutral-100 border border-neutral-300 rounded-[8] ${classname}`}>
        {icon ? <Ionicons name={icon} size={16} color={iconColor ? iconColor : 'black'} /> : null}
        <TextInput
          className={` w-full text-lg`}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#A1A1AA"
          style={style}
          keyboardType={keyboardType ? keyboardType : 'default'}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default Input;
