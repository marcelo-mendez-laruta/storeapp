import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  const [loaded] = useFonts({
    'noto-sans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'noto-sans-light': require('./assets/fonts/NotoSans-Light.ttf'),
  });
  if (!loaded) return <AppLoading />;
  return (
    <ShopNavigator/>
  );
}
