import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';

// Firebase configuration for mrxamjad-portfolio
const firebaseConfig = {
    apiKey: "AIzaSyDmmHSlkBmK3lbcDFkjUclWpIXGfub6KAQ",
    authDomain: "mrxamjad-portfolio.firebaseapp.com",
    projectId: "mrxamjad-portfolio",
    storageBucket: "mrxamjad-portfolio.firebasestorage.app",
    messagingSenderId: "299070038730",
    appId: "1:299070038730:web:9efba72de8959787f04a33",
    measurementId: "G-RZHNCQ9E84"
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics | null = null;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Analytics only on client-side
if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, analytics };
