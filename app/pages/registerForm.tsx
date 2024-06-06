// components/RegisterForm.tsx
'use client'

import React, { useState } from 'react'; // Import React
import { addUser } from '@/app/lib/userService'; // Import the addUser function from your userService

export default function RegisterForm ()  {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <label htmlFor="displayName">Display Name:</label>
        <input type="text" id="displayName"  className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username"  className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password"  className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <label htmlFor="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" className="border border-gray-300 rounded-md px-4 py-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}