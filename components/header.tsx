import { Nav } from "./nav"
import {INav} from "@/components/types/nav.t" 

const menu: INav[] = [
  {title: "Pažymėjimai", slug: "certificates" },
  {title: "Studijų dalykai", slug: "subjects" },
]

export function Header() {
  return (
    <header className="border-b border-gray-400 p-1 mb-5">
      <Nav menu={menu} />
    </header>
  )
}