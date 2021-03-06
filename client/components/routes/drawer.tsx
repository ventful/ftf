import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import TrackerStack from './trackerStack';
import ScanQRCode from '../screens/ScanQRCode';
import Accordion from '../../Accordion';
import LogIn from '../screens/LogIn';
// import Search from '../screens/search';
// import PhotoForager from '../screens/PhotoForager';

const RootDrawerNavigator = createDrawerNavigator({
  Tracker: {
    screen: TrackerStack,
  },
  // Search: {
  //   screen: Search,
  // },
  // PhotoForager: {
  //   screen: PhotoForager,
  // },
  Profile: {
    screen: Accordion,
  },
  ScanQRCode: {
    screen: ScanQRCode,
  },
  LogOut: {
    screen: LogIn,
    params: { previous_screen: 'LogOut' },
  },
});

export default createAppContainer(RootDrawerNavigator);
