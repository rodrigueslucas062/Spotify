import { saudacao } from "../../../utils/saudacao"
import NavButton from "../../../utils/navegacao/NavButton"
import RecentCard from "../Layouts/Cards/RecentCards"
import ForYouCard from "../Layouts/Cards/ForYouCards"

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
                <ForYouCard />
            </div>
        </main>
    )
}

export default renderMainPlay;