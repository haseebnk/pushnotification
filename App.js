import React, { Component } from 'react';
import {
  Text,
   View, TouchableHighlight ,Button
  
} from 'react-native';

import PushNotification from "react-native-push-notification";
import myNotification from './push';


      const Cat = () => {
        return (
          <View>
                    <TouchableHighlight
                      style={{
                        height: 40,
                        width: 160,
                        borderRadius: 10,
                        backgroundColor: "yellow",
                        marginLeft: 50,
                        marginRight: 50,
                        marginTop: 20
                      }}>
                      <Button onPress={() => myNotification()}
                        title="SAVE"
                        accessibilityLabel="Learn more about this button"
                      />
                    </TouchableHighlight>
                  </View>
        );
      }
      
      export default Cat;















