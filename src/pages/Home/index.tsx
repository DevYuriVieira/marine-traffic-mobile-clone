import React from 'react';
import { View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';

export default function Home({ navigation }: any) {
  
  const handleGoToLogin = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ImageBackground 
        source={require('../../../assets/mapa-fundo.jpeg')} 
        style={styles.mapBackgroundPlaceholder}
        resizeMode="cover"
      >
        
        <View style={styles.rightColumn}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="menu" size={24} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="heart-outline" size={24} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="filter" size={22} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
            <MaterialIcons name="my-location" size={22} color="#333333" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBar}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search MarineTraffic..."
            placeholderTextColor="#757575"
          />
          
          <View style={styles.bottomIconGroup}>
            <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 16 }}>
              <FontAwesome5 name="binoculars" size={20} color="#1A1A1A" />
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.7} onPress={handleGoToLogin}>
              <Ionicons name="person" size={22} color="#1966CC" /> 
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}