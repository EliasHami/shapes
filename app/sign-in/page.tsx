"use client"
import { useState, useTransition } from "react";
import { signIn } from "./actions";
import { useRouter } from 'next/navigation';


export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState(null)
  let [isPending, startTransition] = useTransition()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    const email = event.target.email.value
    // @ts-ignore
    const password = event.target.password.value
    startTransition(async () => {
      try {
        await signIn(email, password)
        router.push('/')
      } catch (error) {
        console.error(error)
        // @ts-ignore
        setError(error.message)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>email</p>
      <input type="text" name="email" />
      <p>Password</p>
      <input type="password" name="password" />
      <button type="submit">{isPending ? "Loading" : "Sign In"}</button>
      {error && <p>{error}</p>}
    </form>
  )
}