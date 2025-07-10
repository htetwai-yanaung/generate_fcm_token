console.log("✅ firebase-messaging-sw.js loaded");

importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyA5mVd5i7E-PlLq0OSrtPKZQls7NxaOgcw",
  projectId: "my-first-project-7a8f6",
  messagingSenderId: "198672835954",
  appId: "1:198672835954:web:847a97342f38feb806e9eb",
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log("[Service Worker] Background message received", payload);
//   self.registration.showNotification(payload.notification.title, {
//     body: payload.notification.body,
//   });
// });
