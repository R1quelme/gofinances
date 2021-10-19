import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes'

import { AuthContext } from './src/AuthContext';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/Global/styles/theme';

import { AppRoutes } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignIn';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App(){
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    const { userStorageLoading } = useAuth()

    if(!fontsLoaded || userStorageLoading){
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
                <StatusBar barStyle="light-content" />
                {/* <AppRoutes /> */}
                <AuthProvider>
                    <Routes />
                </AuthProvider>
        </ThemeProvider>
    )
}
