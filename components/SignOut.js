import {signOut} from 'next-auth/react'

export function HandleSignOut() {
    signOut();
}