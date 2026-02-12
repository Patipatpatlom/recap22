import React, { useEffect, useState } from 'react'
import useUserStore from '../Stores/userStore'
import axios from 'axios'

function TokenProfile() {
  const [user, setUser] = useState(null)
  const token = useUserStore((state) => state.token)

  useEffect(() => {
    if (token) {
      fetchUser()
    }
  }, [token])

  async function fetchUser() {
    try {
      const res = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log("res", res.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) {
    return <p className="text-2xl text-red-400 text-center">no user in store</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">

        <img
          src={user.image}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
        />

        <h2 className="mt-4 text-2xl font-bold">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-gray-500">@{user.username}</p>

        <div className="mt-6 space-y-3 text-left">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">First Name</span>
            <span>{user.firstName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Last Name</span>
            <span>{user.lastName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-sm">{user.email}</span>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default TokenProfile
