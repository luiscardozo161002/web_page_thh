import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { toast } from 'sonner';

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL as string;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

interface AuthContextType {
  user: User | null;
  token: string | null;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        if (u.email !== ADMIN_EMAIL) {
          await signOut(auth);
          toast.error('No tienes permisos para acceder al panel de administración.');
          return;
        }
        setUser(u);
        const t = await u.getIdToken();
        setToken(t);
      } else {
        setUser(null);
        setToken(null);
        setEditMode(false);
      }
    });
  }, []);

  const login = async () => { await signInWithPopup(auth, provider); };
  const logout = async () => { await signOut(auth); };

  return (
    <AuthContext.Provider value={{ user, token, editMode, setEditMode, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
