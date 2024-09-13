import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {Routes} from '.';
import CartScreen from '../screens/cart/CartScreen';
import useRootStore from '../context/useStore';

const BotTab = createBottomTabNavigator();

const MainRoute = () => {
  // const cartItemsCount = useAppSelector(state => state.cart.items.length);
  const cartItemsCount = useRootStore().cart.items.length;

  return (
    <BotTab.Navigator screenOptions={{headerShown: false}}>
      <BotTab.Screen name={Routes.Home} component={HomeScreen} />
      <BotTab.Screen name={Routes.Profile} component={ProfileScreen} />
      <BotTab.Screen
        name={Routes.Cart}
        component={CartScreen}
        options={{tabBarBadge: cartItemsCount ? cartItemsCount : undefined}}
      />
    </BotTab.Navigator>
  );
};

export default MainRoute;
