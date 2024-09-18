import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyBFdB5-coG9qa8WTeWMzWdlQUt372xFKQs",
  authDomain: "auralearningpath.firebaseapp.com",
  projectId: "auralearningpath",
  storageBucket: "auralearningpath.appspot.com",
  messagingSenderId: "372727522970",
  appId: "1:372727522970:web:5fba1570b4fe9b20896123"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser(user);
            setRole(userData.role);

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('role', userData.role);
          } else {
            console.error("User not found in database.");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        setUser(null);
        setRole(null);

        // Remove user data from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('role');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser(user);
        setRole(userData.role);

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', userData.role);
      } else {
        console.error("User not found in database.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const signup = async (email, password, name, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        role,
        createdAt: Timestamp.fromDate(new Date())
      });
      
      setUser(user);
      setRole(role);

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', role);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);

      // Remove user data from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
