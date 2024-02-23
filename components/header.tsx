import React from "react"
import { AcademicCapIcon } from "@heroicons/react/24/outline"

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-width-20 border-black mb-9">
      <div className="flex items-center">
        <AcademicCapIcon className="h-8 w-8 stroke-black-700" />
        <div className="mr-5 text-2x1 text-black-700 font-bold">
          Akademinės studijų pažymos
        </div>
      </div>
    </header>
  )
}
