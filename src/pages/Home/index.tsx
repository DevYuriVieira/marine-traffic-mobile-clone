import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#D1D9E0" />

      <View style={styles.mapBackgroundPlaceholder}>
        <Text style={styles.mapText}>[ MAP VIEW ]</Text>
      </View>

      <View style={styles.rightColumn}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconText}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconText}>▽</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
          <Text style={styles.iconText}>⌖</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search MarineTraffic..."
          placeholderTextColor="#757575"
        />
        
        <View style={styles.bottomIconGroup}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.bottomIcon}>👓</Text> 
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.bottomIcon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}