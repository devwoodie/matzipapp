import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthStackNavigator';
import { authNavigations } from '../constants';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME >

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
    return (
        <SafeAreaView>
            <View>
                <Button title='로그인 화면으로 이동' onPress={() => navigation.navigate(authNavigations.LOGIN)}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
