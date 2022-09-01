import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSANGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

self.FIREBASE_APPCHECK_DEBUG_TOKEN = 'F6F1A0AB-3841-4AEF-89A8-51E1E8BDA9C8';

export const app = initializeApp(firebaseConfig);

// eslint-disable-next-line
const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider(import.meta.env.VITE_SITEKEY),
	isTokenAutoRefreshEnabled: true,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
