import React from "react"
import { AcademicCapIcon } from "@heroicons/react/24/outline"

export function Header() {
  return (
    <header className="border-b border-gray-400 p-1 mb-5">
      <div className="flex gap-x-2">
        <AcademicCapIcon className="h-8 w-8 stroke-orange-700" />
        <div className="text-2x1 text-orange-700 font--bold">RAS</div>
      </div>
    </header>
  )
}
