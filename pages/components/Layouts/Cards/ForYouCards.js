import Samurai from "../../../../public/images/album/chippin-in.jpg";
import RiseRise from "../../../../public/images/album/rise-rise.jpg";
import Tdi from "../../../../public/images/album/the-devil-in-i.jpg";
import Archive from "../../../../public/images/album/archive.jpg";
import Aderal from "../../../../public/images/album/aderal.jpg";
import Image from "next/image";

const ForYouCard = () => {
    return(
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
    )
}

export default ForYouCard;