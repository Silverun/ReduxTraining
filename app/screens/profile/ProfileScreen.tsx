import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {styles} from './ProfileScreen.styles';
import useRootStore from '../../context/useStore';
import {observer} from 'mobx-react-lite';

const ProfileScreen = observer(() => {
  const {user, logout} = useRootStore().auth;

  const handleLogout = () => {
    logout();
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
});

export default ProfileScreen;
