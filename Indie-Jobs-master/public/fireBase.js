var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBffBzhQj1Ul_tTIu5Ef-d0bZhU3jawMxE",
  authDomain: "indie-jobs-136e4.firebaseapp.com",
  projectId: "indie-jobs-136e4",
  storageBucket: "indie-jobs-136e4.appspot.com",
  messagingSenderId: "595493673042",
  appId: "1:595493673042:web:c1165d5a6fc17397d2278b",
  measurementId: "G-C9FK2QF1X3",
  databaseURL:"https://projecttest-e52e2-default-rtdb.firebaseio.com"
  };
  
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
    var database = firebase.database();
}