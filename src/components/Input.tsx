import { View, Text, TextInput } from 'react-native';
import React from 'react';

type InputProps = {
  placeholder: string;
  keyboardType?: 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: object;
  onChangeText: (text: string) => void;
  classname?: string;
  labelClassName?: string;
  label: string;
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
}: InputProps) => {
  return (
    <View className="flex gap-[8px]">
      <Text className={`font-normal text-lg text-text ${labelClassName}`}>{label}</Text>
      <TextInput
        className={`px-[16px] h-[60px] bg-neutral-100 w-full rounded-[8px] border border-neutral-300 text-lg ${classname}`}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#A1A1AA"
        style={style}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
