import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import {styles} from './ProfileScreen.styles';
import {authActions} from '../../store/auth/authSlice';

const ProfileScreen = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/150/cccccc/ffffff?text=User',
          }}
          style={styles.userIcon}
        />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>User Name:</Text>
        <Text style={styles.value}>{user?.name || 'N/A'}</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>User Email:</Text>
        <Text style={styles.value}>{user?.email || 'N/A'}</Text>
      </View>
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#d32f2f" />
      </View>
    </View>
  );
};

export default ProfileScreen;
