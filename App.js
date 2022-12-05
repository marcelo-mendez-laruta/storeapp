import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    'noto-sans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'noto-sans-light': require('./assets/fonts/NotoSans-Light.ttf'),
  });
  if (!loaded) return <AppLoading />;
  return (
    <MainNavigator/>
  );
}
