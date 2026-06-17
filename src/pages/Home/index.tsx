import React from 'react';
import { View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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
        
        <View style={styles.rightControlsWrapper}>
          
          <TouchableOpacity style={styles.singleButton} activeOpacity={0.7}>
            <MaterialCommunityIcons name="weather-windy" size={24} color="#333333" />
          </TouchableOpacity>
          
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Ionicons name="heart-outline" size={24} color="#333333" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <View style={styles.customIconContainer}>
                <MaterialCommunityIcons name="filter-outline" size={22} color="#333333" />
                <View style={styles.funnelLinesWrapper}>
                  <View style={styles.funnelLine} />
                  <View style={styles.funnelLine} />
                  <View style={styles.funnelLine} />
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.iconButton, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
              <View style={styles.gpsContainer}>
                <MaterialIcons name="gps-not-fixed" size={22} color="#333333" />
                <View style={styles.gpsInnerCircle} />
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottomBar}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search MarineTraffic..."
            placeholderTextColor="#757575"
          />
          
          <View style={styles.bottomIconGroup}>
            <TouchableOpacity activeOpacity={0.7} style={styles.binocularsButton}>
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