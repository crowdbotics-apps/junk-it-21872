import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps157565Navigator from '../features/Maps157565/navigator';
import UserProfile157561Navigator from '../features/UserProfile157561/navigator';
import Maps157521Navigator from '../features/Maps157521/navigator';
import Add-Item157520Navigator from '../features/Add-Item157520/navigator';
import Maps157516Navigator from '../features/Maps157516/navigator';
import UserProfile157512Navigator from '../features/UserProfile157512/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps157565: { screen: Maps157565Navigator },
UserProfile157561: { screen: UserProfile157561Navigator },
Maps157521: { screen: Maps157521Navigator },
Add-Item157520: { screen: Add-Item157520Navigator },
Maps157516: { screen: Maps157516Navigator },
UserProfile157512: { screen: UserProfile157512Navigator },

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
