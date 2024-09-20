import { StackNavigator } from 'react-navigation';

import Signin from './screens/Signin';

const stackNavigatorConfig = {
  headerMode: 'screen',
  navigationOptions: {
    header: null
  }
};

const AppNavigator = new StackNavigator({
  Signin: { screen: Signin }
}, stackNavigatorConfig);

export default AppNavigator;
