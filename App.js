/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Boxes, NavHeader } from './src/components';
import { Dashboard } from './src/screens/dashboard';
import { ScreenNavigator } from './src/navigation/ScreenNavigation';


const App=()=>{
  return<ScreenNavigator/>;
}


export default App;