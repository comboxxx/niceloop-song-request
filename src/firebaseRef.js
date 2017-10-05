import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDh2erMPWN7i-Kp7qlz0zaPHrSOKqbof74",
  authDomain: "kitsakornfirebase.firebaseapp.com",
  databaseURL: "https://kitsakornfirebase.firebaseio.com",
  projectId: "kitsakornfirebase",
  storageBucket: "kitsakornfirebase.appspot.com",
  messagingSenderId: "232864282026"
};
firebase.initializeApp(config);



export let isInintial = false;
export const storageRef = firebase.storage().ref()
export const musicBannerRef = storageRef.child('musicBanner')
export const rootRef = firebase.database().ref();
//export const songRef = rootRef.child('songs').child("3180");
export const customerRef = rootRef.child('customers')
export const settingRef = customerRef.child('setting')
export let songRef = null //rootRef.child('songs').child("3180");


export const start = (id) => {
  songRef = customerRef.child('songs').child(id);
  isInintial = true;
}