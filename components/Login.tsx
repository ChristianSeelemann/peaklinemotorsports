import React from "react";
import { signIn } from "next-auth/client";
import { signOut } from "next-auth/client";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { sessionProps } from "../types/types";

export default function Login({ session }: sessionProps) {
  return (
    <>
      {!session && (
        <button onClick={() => signIn()} className="flex items-center gap-2">
          <FiLogIn />
        </button>
      )}
      {session && (
        <button onClick={() => signOut()} className="flex items-center gap-2">
          <FiLogOut />
        </button>
      )}
    </>
  );
}
