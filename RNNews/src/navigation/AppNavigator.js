import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, Image, Linking, View, SafeAreaView,DeviceEventEmitter, TouchableOpacity, Platform, } from 'react-native'
import Splash from '../screens/splash/index';
import Select_log_sign from '../screens/select_log_sign/index';
import Login from '../screens/login/index';
import Forgot_pass from '../screens/forgot_pass/';
import Home from '../screens/home/index';
import Signup from '../screens/signup/index'
import images from '../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HOME from '../screens/home/index'
import Detail from '../screens/DetailNews/index'
import Profile from '../screens/edit_profile/index'
import Setting from '../screens/Setting/index'

const Stack = createStackNavigator();

class AppNavigator extends React.Component {

    render() {
        return (
            <Stack.Navigator screenOptions={{}} initialRouteName={'splash'}>
                <Stack.Screen name='splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
                <Stack.Screen name='select_log_sign' component={Select_log_sign} options={{ title: 'select_log_sign', headerShown: false, }} />
                <Stack.Screen name='login' component={Login} options={{ title: 'Login', headerShown: false, }} />
                <Stack.Screen name='forgot_pass' component={Forgot_pass} options={{ title: 'Forgot Password', headerShown: true, }} />
                <Stack.Screen name='signup' component={Signup} options={{ title: 'Create Account', headerShown: true, }} />
                <Stack.Screen name='home' component={HOME} options={({route, navigation}) => ({ title: ' Home', headerShown: true, headerRight: () => (
                        <View style={{ marginRight: wp('4%') }}><TouchableOpacity  onPress={() => DeviceEventEmitter.emit('Menu')}>
                            <Image style={{ width: wp('4%'), height: hp('2%') }} resizeMode={'cover'} source={images.img_menu} />
                        </TouchableOpacity></View>
                    ) })} />
                <Stack.Screen name='detail' component={Detail} options={{ title: 'Details', headerShown: true, }} />
                <Stack.Screen name='profile' component={Profile} options={{ title: 'Profile', headerShown: true, }} />
                <Stack.Screen name='setting' component={Setting} options={{ title: 'Setting', headerShown: true, }} />
            </Stack.Navigator>
        );
    }
}


export default AppNavigator;