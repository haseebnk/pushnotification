import React from 'react';


import PushNotification from "react-native-push-notification";



function myNotification(props) {

  try {
    PushNotification.configure({
      //
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        console.log('Clicked on Notification')

        try {
          props.navigation.navigate('Notification')
        }
        catch {
          console.log('No Route')
        }
      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

      },

      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    console.log('Inside Notication function')
    PushNotification.localNotification({
      channelId: "Silent PUSH",

      title: "Full Stack App ",
      message: "You just have explored the notification",

    });

  }
  catch (e) {
    console.log(e)
  }


}

export default myNotification;