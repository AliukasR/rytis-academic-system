import React from "react"
import { UserIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="flex justify-center items-center mt-5 p-1 bg-gray text-black text-sm">
      <UserIcon className="icon h-8 w-8 stroke-black-700" />
      <div className="text-2x1 text-black-700 font-bold text-center">
        Prisijungti/Registruotis
      </div>
    </footer>
  )
}
