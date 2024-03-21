import Link from "next/link";
const { HomeIcon, Search, Library, GalleryThumbnails, Gamepad2, QrCode, } = require("lucide-react")

const renderAside = () => {
    return (
        <aside className="flex flex-col justify-between w-[288px] flex-2">
            <div className="bg-zinc-950 space-y-3">
                <div className="bg-zinc-800 rounded-md space-y-1">
                    <Link href="" className="flex items-center p-3 gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                        <HomeIcon />
                        Home
                    </Link>
                    <Link href="" className="flex items-center p-3 gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                        <Search />
                        Pesquisar
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-800 space-y-1 p-2 rounded-t-lg mt-3">
                <Link href="" className="flex items-center gap-3 p-1 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <Library />
                    Sua Biblioteca
                </Link>
            </div>
            <div className="flex-grow bg-neutral-900 space-y-1 p-2 rounded-b-lg">
                <div className="flex flex-col gap-3">
                    <Link href="/whiteboard" className="flex rounded-md items-center gap-4 p-2 overflow-hidden group hover:bg-zinc-800 transition-colors">
                        <GalleryThumbnails />Músicas curtidas
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href="/personagem" className="flex rounded-md items-center gap-4 p-2 overflow-hidden group hover:bg-zinc-800 transition-colors">
                        <Gamepad2 />Playlist
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href="/personagem" className="flex rounded-md items-center gap-4 p-2 overflow-hidden group hover:bg-zinc-800 transition-colors">
                        <QrCode />Playlist 2
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default renderAside;