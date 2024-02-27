importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging-compat.js");

 //the Firebase config object 
const firebaseConfig = {
    apiKey: "AIzaSyB-8hjcLjl3lvMdpXF4eivjMVWknzaYNTY",
    authDomain: "fitme-27717.firebaseapp.com",
    projectId: "fitme-27717",
    storageBucket: "fitme-27717.appspot.com",
    messagingSenderId: "967812662416",
    appId: "1:967812662416:web:52bf6458209e09269f8415",
    measurementId: "G-B40JJ9611X"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => 
{
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {body: payload.notification.body,icon: payload.notification.icon };
  return self.registration.showNotification(notificationTitle,notificationOptions);
});
