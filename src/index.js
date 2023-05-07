import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyASdbtnJu57vUxE0KWH8yAdsqA_yFz3oXs',
	authDomain: 'childrenrightsgames.firebaseapp.com',
	projectId: 'childrenrightsgames',
	storageBucket: 'childrenrightsgames.appspot.com',
	messagingSenderId: '358729679610',
	appId: '1:358729679610:web:fb40f1086856ec78363f43',
	measurementId: 'G-CGJ3KZTQQT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
