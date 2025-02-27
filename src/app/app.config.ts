import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ projectId: "app-clarifi", appId: "1:499935551768:web:cf0e476fe673a236d67e6d", storageBucket: "app-clarifi.firebasestorage.app", apiKey: "AIzaSyCSCByC8LFH8bLX0i1t4jXzjc4T5jltgYo", authDomain: "app-clarifi.firebaseapp.com", messagingSenderId: "499935551768", measurementId: "G-72Z5EC957Z" })), 
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  
};
