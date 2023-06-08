//import LogoIcon from "./icons/logo.svg?component";
import { ReactComponent as LogoIcon } from "./assets/icons/logo.svg";
import { ReactComponent as SquarePlusIcon } from "./assets/icons/square-plus.svg";
import { ReactComponent as LayoutIcon } from "./assets/icons/layout.svg";
import { ReactComponent as PaletteIcon } from "./assets/icons/palette.svg";
import { ReactComponent as FileIcon } from "./assets/icons/file.svg";
import { ReactComponent as ImageIcon } from "./assets/icons/image.svg";


export default function App() {
    return (
        <div className="flex font-sans bg-gray-100 text-gray-900">
            <aside className="h-screen border-r border-gray-200 bg-white w-18 flex flex-col items-center">
                <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
                    <LogoIcon className="fill-current" />
                </div>
                <nav className="flex flex-1 flex-col gap-y-4 pt-10">
                    <a href="#" className="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
                        <SquarePlusIcon className="w-6 h-6 stroke-current" />
                    </a>
                    <a href="#" className="rounded-xl p-2 text-gray-400 bg-gray-100">
                        <LayoutIcon className="w-6 h-6 stroke-current" />
                    </a>
                    <a href="#" className="rounded-xl p-2 text-gray-400 bg-gray-100">
                        <PaletteIcon className="w-6 h-6 stroke-current" />
                    </a>
                    <a href="#" className="rounded-xl p-2 text-gray-400 bg-gray-100">
                        <FileIcon className="w-6 h-6 stroke-current" />
                    </a>
                    <a href="#" className="rounded-xl p-2 text-gray-400 bg-gray-100">
                        <ImageIcon className="w-6 h-6 stroke-current" />
                    </a>

                </nav>
            </aside>
        </div>
    )
}