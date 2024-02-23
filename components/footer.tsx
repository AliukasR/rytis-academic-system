import React from "react"
import { UserIcon } from "@heroicons/react/24/outline"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 border-t border-width: 20px border-black  mb-9">
      <UserIcon className="icon h-8 w-8 stroke-black-700" />
      <div className="text-2x1 text-black-700 font-bold text-center">
        Grįžti į pradinį puslapį
      </div>
    </footer>
  )
}
