import React from 'react';
import { View, ActivityIndicator ,Text} from 'react-native';
import { Color, Constants, Matrics } from '../../common/styles';
import styles from './styles';

const LoadingComponent = ({text,value}) => {
    return (
      
      <View style={styles.LoaderContainer}>
        <View style={styles.LoaderWrapper}>
          <ActivityIndicator
            animating={true}
            size='large'
            color={Color.WHITE}
            style={{ marginBottom: 5 }}
          />
          <Text style={styles.statictext}>{text}</Text>
        </View>
      </View>
      
    )

}
export default LoadingComponent;
