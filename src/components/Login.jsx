import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse)
      // Here you would typically send the token to your backend
      // and receive a session token in return
      navigate('/dashboard')
    },
    scope: 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/calendar',
  })

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login()}>Sign in with Google</button>
    </div>
  )
}

export default Login
