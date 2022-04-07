import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD9LEK_D526WJr7W3nGQE2T4ivSeZ7lS8o',
	authDomain: 'shopping-app-db-c2a20.firebaseapp.com',
	projectId: 'shopping-app-db-c2a20',
	storageBucket: 'shopping-app-db-c2a20.appspot.com',
	messagingSenderId: '107600495819',
	appId: '1:107600495819:web:251801a334e01cc9ae074e',
};

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	// user trying to sign in
	const userSnapshot = await getDoc(userDocRef);

	// chech if user trying to sign in exists in the database
	// if not, create a new user doc (profile) in database
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userDocRef;
};
