// components/LogoutButton.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <button onClick={handleLogout} className='bg-red-500 text-white rounded p-2 my-2'>
      Log Out
    </button>
  );
}
