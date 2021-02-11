import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyD-j5jhk2qfcBhmxBoo8CzcZjItCWlLPaE",
    authDomain: "expensetracker-c15a3.firebaseapp.com",
    projectId: "expensetracker-c15a3",
    storageBucket: "expensetracker-c15a3.appspot.com",
    messagingSenderId: "1034233312049",
    appId: "1:1034233312049:web:54314423af28cb3ad6f610",
    measurementId: "G-256E38BH8B"
  };

  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();


export function configureNotification(){
   Notification.requestPermission().then((permission)=>{
       console.log(permission)
       if(permission === "granted")
       {
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              console.log("Token :", currentToken)
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
            
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        
          });
       }
   })
}