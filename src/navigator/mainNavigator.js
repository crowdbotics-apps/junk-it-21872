import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps157705Navigator from '../features/Maps157705/navigator';
import UserProfile157701Navigator from '../features/UserProfile157701/navigator';
import BlankScreen23157660Navigator from '../features/BlankScreen23157660/navigator';
import Maps157619Navigator from '../features/Maps157619/navigator';
import Add-Item157618Navigator from '../features/Add-Item157618/navigator';
import Maps157614Navigator from '../features/Maps157614/navigator';
import UserProfile157610Navigator from '../features/UserProfile157610/navigator';
import Maps157570Navigator from '../features/Maps157570/navigator';
import Add-Item157569Navigator from '../features/Add-Item157569/navigator';
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
Maps157705: { screen: Maps157705Navigator },
UserProfile157701: { screen: UserProfile157701Navigator },
BlankScreen23157660: { screen: BlankScreen23157660Navigator },
Maps157619: { screen: Maps157619Navigator },
Add-Item157618: { screen: Add-Item157618Navigator },
Maps157614: { screen: Maps157614Navigator },
UserProfile157610: { screen: UserProfile157610Navigator },
Maps157570: { screen: Maps157570Navigator },
Add-Item157569: { screen: Add-Item157569Navigator },
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
