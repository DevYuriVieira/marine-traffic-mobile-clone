import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { styles } from './style';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');

  const handleNavigate = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#4A5568" />

      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>⬠</Text> 
        </View>

        <Text style={styles.title}>Create Your Account</Text>
        
        <Text style={styles.subtitle}>
          Sign Up to kpler-prod to continue to <Text style={styles.boldText}>[Mobile] MarineTraffic App</Text>.
        </Text>

        {/* Bônus: LinkedIn */}
        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={handleNavigate}>
          <View style={styles.socialIconContainer}>
            <Text style={[styles.socialIconText, styles.linkedinText]}>in</Text>
          </View>
          <Text style={styles.socialLabel}>Continue with LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={handleNavigate}>
          <View style={styles.socialIconContainer}>
            <Text style={[styles.socialIconText, styles.googleText]}>G</Text>
          </View>
          <Text style={styles.socialLabel}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={handleNavigate}>
          <View style={styles.socialIconContainer}>
            <Text style={[styles.socialIconText, styles.appleText]}></Text>
          </View>
          <Text style={styles.socialLabel}>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        <InputField 
          label="Email address *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button title="Continue" onPress={handleNavigate} />

        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.footerLink} onPress={handleNavigate}>Log in</Text>
        </Text>
      </View>
    </View>
  );
}