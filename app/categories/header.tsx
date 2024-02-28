import React from "react"
import { UserIcon } from "@heroicons/react/24/outline"

export function Header() {
  return (
    <header className="flex justify-center items-center p-4 border-b border-gray-400 mb-5">
      <div className="flex items-center">
        <div className="mr-4 text-2x1 text-black-700 font-bold">
          Studiju Dienynas
        </div>
      </div>
    </header>
  )
}
