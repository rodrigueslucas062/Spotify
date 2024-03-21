const { Play } = require("lucide-react");
import Curtidas from "../../../../public/images/album/curtidas.jpg";
import Samurai from "../../../../public/images/album/chippin-in.jpg";
import RiseRise from "../../../../public/images/album/rise-rise.jpg";
import Tdi from "../../../../public/images/album/the-devil-in-i.jpg";
import Archive from "../../../../public/images/album/archive.jpg";
import Aderal from "../../../../public/images/album/aderal.jpg";
import Image from "next/image";

const RecentCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={Curtidas} alt="Capa playlist" width={90} height={90} />
        <strong>Músicas Curtidas</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={Samurai} alt="Capa playlist" width={90} height={90} />
        <strong>Chippin In</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={RiseRise} alt="Capa playlist" width={90} height={90} />
        <strong>Rise, Rise</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={Tdi} alt="Capa playlist" width={90} height={90} />
        <strong>The Devil In I</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={Archive} alt="Capa playlist" width={90} height={90} />
        <strong>Bullets</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
      <a href="" className="flex items-center rounded-md gap-4 overflow-hidden bg-white/10 group hover:bg-white/20 transition-colors">
        <Image src={Aderal} alt="Capa playlist" width={90} height={90} />
        <strong>Aderal</strong>
        <button className="flex items-center justify-center w-12 h-12 rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="" />
        </button>
      </a>
    </div>
  );
};

export default RecentCard;
