'use client'
import React, { useState } from 'react';
import { addUser } from '@/app/lib/userService';

export default function RegisterForm() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        // Call addUser function with form inputs and profile picture file
        const error = await addUser(displayName, email, username, password, profilePictureFile);
        if (error) {
          setErrorMessage(error);
        } else {
          setErrorMessage(null);
          // Optionally, redirect the user to another page upon successful registration
        }
      } catch (error) {
        console.error('Error registering user:', error);
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <label htmlFor="displayName">Display Name:</label>
        <input type="text" id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full text-black" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full text-black" />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full text-black" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full text-black" />

        <label htmlFor="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" onChange={(e) => setProfilePictureFile(e.target.files?.[0] || null)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button>
      </form>

      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}
