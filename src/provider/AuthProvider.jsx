import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth(app);

	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const updateUserProfile = userProfile => {
		return updateProfile(auth.currentUser, userProfile);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log('On Auth state changed', currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		createUser,
		signIn,
		googleSignIn,
		logOut,
		updateUserProfile,
		loading,
		setLoading,
		user,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
