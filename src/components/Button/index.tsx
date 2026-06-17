import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContinue} activeOpacity={0.8} {...rest}>
      <Text style={styles.buttonContinueText}>{title}</Text>
    </TouchableOpacity>
  );
};