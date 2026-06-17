import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { styles } from './style';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');

  const handleNavigate = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" translucent />

      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigate}>
          <Feather name="x" size={24} color="#000000" />
        </TouchableOpacity>
        
        <View style={styles.urlContainer}>
          <Feather name="lock" size={14} color="#000000" />
          <Text style={styles.urlText}>auth.kpler.com</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ellipsis-vertical" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Ionicons name="home" size={36} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.title}>Create Your Account</Text>

        <Text style={styles.subtitle}>
          Sign Up to kpler-prod to continue to <Text style={styles.boldText}>[Mobile]</Text> MarineTraffic App.
        </Text>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <View style={styles.socialIconContainer}>
            <FontAwesome5 name="linkedin" size={20} color="#0A66C2" />
          </View>
          <Text style={styles.socialText}>Continue with LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <View style={styles.socialIconContainer}>
            <Image 
              source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} 
              style={styles.googleIcon} 
            />
          </View>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <View style={styles.socialIconContainer}>
            <FontAwesome5 name="apple" size={22} color="#000000" />
          </View>
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.noteText}>
          Note: Due to recent updates, you may need to re-authorize access with your social media account.
        </Text>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email address *</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.continueButton} activeOpacity={0.8} onPress={handleNavigate}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.footerLink}>Log in</Text>
          </Text>
        </View>
      </View>

      <View style={styles.bottomWebBar}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigate}>
          <Feather name="chevron-left" size={28} color="#000000" />
        </TouchableOpacity>

        <View style={styles.bottomWebRightGroup}>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="share-outline" size={26} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="reload" size={22} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}