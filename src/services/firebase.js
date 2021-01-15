import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfaR-xPeWjqfG_ic0OVYrjYyJRi9zvZc8",
    authDomain: "menu-qr-generator.firebaseapp.com",
    projectId: "menu-qr-generator",
    storageBucket: "menu-qr-generator.appspot.com",
    messagingSenderId: "505426209922",
    appId: "1:505426209922:web:9c46327e58810aa162189b"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const fetchMenu = (userId, restaurantId) => {
    return db.collection('restaurants')
        .doc(userId)
        .collection('data')
        .doc(restaurantId)
        .get()
};