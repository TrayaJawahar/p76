import React from 'react';
import { Text,View } from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View 
              style={{flex:'1',
                      justifyContent:'center' , 
                       alignItems:'center'}}>
                <Text>DAILY PICS</Text>
            </View>
        )
    }
}