import React from 'react';
import { Text,View } from 'react-native';

export default class SpaceCrafts extends React.Component{
    render(){
        return(
            <View 
              style={{flex:'1',
                      justifyContent:'center' , 
                       alignItems:'center'}}>
                <Text>SPACE CRAFTS SCREEN</Text>
            </View>
        )
    }
}