import React from 'react';
import { Text, TextInput, View, TextInputProps } from 'react-native';
import { styles } from './style';

interface InputFieldProps extends TextInputProps {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};