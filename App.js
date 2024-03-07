import  React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider} from 'react-native-paper';
import AppStack from './components/navigation/AppStack';
import AuthStack from './components/navigation/AuthStack';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase';


export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user',user);
      setUser(user);
    });
  }, []);

  return (

      <PaperProvider>      
        <NavigationContainer>
          {user ? (<AppStack/>) : (<AuthStack/>) }
        </NavigationContainer>
      </PaperProvider>

  );
}
