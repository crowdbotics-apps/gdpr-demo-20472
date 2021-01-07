import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem190849Navigator from '../features/Additem190849/navigator';
import Maps190845Navigator from '../features/Maps190845/navigator';
import UserProfile190841Navigator from '../features/UserProfile190841/navigator';
import NotificationList3190818Navigator from '../features/NotificationList3190818/navigator';
import SignUp22190816Navigator from '../features/SignUp22190816/navigator';
import Camera1104372Navigator from '../features/Camera1104372/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem190849: { screen: Additem190849Navigator },
Maps190845: { screen: Maps190845Navigator },
UserProfile190841: { screen: UserProfile190841Navigator },
NotificationList3190818: { screen: NotificationList3190818Navigator },
SignUp22190816: { screen: SignUp22190816Navigator },
Camera1104372: { screen: Camera1104372Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
