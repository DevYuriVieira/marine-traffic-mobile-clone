import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.closeBtn}
            activeOpacity={0.7}
            onPress={() => navigation.replace('Home')}
          >
            <Feather name="x" size={16} color="#000" />
          </TouchableOpacity>

          <Feather name="lock" size={16} color="#A8C7FA" />
          <Text style={styles.urlText}>auth.kpler.com</Text>
        </View>

        <Ionicons name="ellipsis-vertical" size={20} color="#A8C7FA" />
      </View>

      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <View style={styles.logoWrap}>
          <View style={styles.logo}>
            <MaterialCommunityIcons name="shield-home-outline" size={38} color="#fff" />
          </View>
        </View>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Log in to Kpler to continue to [Mobile] MarineTraffic{'\n'}App.
        </Text>

        {[
          { icon: <FontAwesome5 name="linkedin" size={20} color="#0A66C2" />, label: 'Continue with LinkedIn' },
          { icon: <Image source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} style={styles.gIcon} />, label: 'Continue with Google' },
          { icon: <FontAwesome5 name="apple" size={22} color="#000" />, label: 'Continue with Apple' },
        ].map(({ icon, label }) => (
          <TouchableOpacity key={label} style={styles.socialBtn} activeOpacity={0.7}>
            <View style={styles.socialIcon}>{icon}</View>
            <Text style={styles.socialLabel}>{label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.note}>
          Note: Due to recent updates, you may need to re-authorize access with your social media account.
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email address*"
            placeholderTextColor="#757575"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.continueBtn} activeOpacity={0.8}>
          <Text style={styles.continueTxt}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Don't have an account?  <Text style={styles.footerLink}>Sign up</Text>
        </Text>
      </ScrollView>
    </View>
  );
}