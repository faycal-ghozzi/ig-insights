"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main>
      {session ? (
        <>
          <p>Logged in as {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("instagram")}>Sign in with Instagram</button>
      )}
    </main>
  )
}
