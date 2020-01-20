import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBUuQmEruEzbqchH_5NmyBg58qWN2pOOM",
  authDomain: "expensify-app-e2ff0.firebaseapp.com",
  databaseURL: "https://expensify-app-e2ff0.firebaseio.com",
  projectId: "expensify-app-e2ff0",
  storageBucket: "expensify-app-e2ff0.appspot.com",
  messagingSenderId: "949186587230",
  appId: "1:949186587230:web:492b6b3057634131e662cf"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
