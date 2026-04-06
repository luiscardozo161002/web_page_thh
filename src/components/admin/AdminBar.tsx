import { useState } from 'react';
import { Settings, Pencil, Check, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function AdminBar() {
  const { user, editMode, setEditMode, login, logout } = useAuth();
  const [avatarError, setAvatarError] = useState(false);

  if (!user) {
    return (
      <button
        onClick={login}
        title="Acceso administrador"
        className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 transition-colors border border-gray-100 dark:border-gray-700"
      >
        <Settings size={17} className='text-primary' />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-2 shadow-xl border border-gray-100 dark:border-gray-700">
      {user.photoURL && !avatarError ? (
        <img
          src={user.photoURL}
          alt="avatar"
          className="w-7 h-7 rounded-full object-cover"
          onError={() => setAvatarError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="w-7 h-7 rounded-full bg-navy-blue text-white text-xs font-bold flex items-center justify-center shrink-0">
          {user.displayName?.charAt(0).toUpperCase() ?? 'A'}
        </span>
      )}
      <button
        onClick={() => setEditMode(!editMode)}
        className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${editMode
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
      >
        {editMode ? <Check size={13} /> : <Pencil size={13} />}
        {editMode ? 'Editando' : 'Editar'}
      </button>
      <button
        onClick={logout}
        title="Cerrar sesión"
        className="text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
      >
        <LogOut size={15} />
      </button>
    </div>
  );
}
