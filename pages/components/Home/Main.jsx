import Image from "next/image"
import Samurai from "../../../public/images/album/chippin-in.jpg"
import RiseRise from "../../../public/images/album/rise-rise.jpg"
import Tdi from "../../../public/images/album/the-devil-in-i.jpg"
import Archive from "../../../public/images/album/archive.jpg"
import Aderal from "../../../public/images/album/aderal.jpg"
import { saudacao } from "../../../utils/saudacao"
import NavButton from "../../../utils/navegacao/NavButton"
import RecentCard from "../Layouts/Cards/RecentCards"

const renderMainPlay = () => {
    const avatarUrl = 'https://avatars.githubusercontent.com/u/39422637?s=400&u=b6bddbc97edde098ad4d50599d99479aff0cb6d9&v=4';

    return (
        <main className="flex-1 space-y-5 pl-3">
            <div className="bg-zinc-800 rounded-lg h-full p-4">
                {/* Botão de Navegação */}
                <div className="flex items-center justify-between gap-4 mt-2">
                    <NavButton />
                    <img
                        src={avatarUrl}
                        alt="GitHub avatar"
                        className="w-10 h-10 rounded-full" />
                </div>

                <h1 className="font-bold text-3xl mt-2 gap-4 mb-3">{saudacao()}</h1>
                <RecentCard />
                <h2 className="font-bold text-2xl mt-10">Feito para você</h2>
                <div className="ml-4">
                    <div className="grid grid-cols-6 gap-4 mt-4">
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Aderal} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-zinc-500">Aderal, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Archive} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Bullets</strong>
                            <span className="text-sm text-zinc-500">Bullets, de Archive</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={RiseRise} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Rise, rise</strong>
                            <span className="text-sm text-zinc-500">Rise, Rise, de Rammstein</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Tdi} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">The devil in i</strong>
                            <span className="text-sm text-zinc-500">The Devil in I, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Samurai} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Chippin in</strong>
                            <span className="text-sm text-zinc-500">Chippin in, de Samurai</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Tdi} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">The devil in i</strong>
                            <span className="text-sm text-zinc-500">The Devil in I, de Slipknot</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default renderMainPlay;