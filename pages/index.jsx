import HomePage from './HomePage'
import LoggedInHomePage from './LoggedInHomePage'
import { useSession,signOut } from 'next-auth/react'
import {redirect} from 'next/navigation'
export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
      {status === "authenticated" ? <LoggedInHomePage /> : <HomePage /> }
    </>
  )
}
