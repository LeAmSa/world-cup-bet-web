import { Navigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export function Home() {
  const [auth] = useLocalStorage("auth", {});

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <div className=" h-screen w-full p-4 bg-red-700 text-white flex flex-col items-center justify-center space-y-6">
      <header className="container flex justify-center max-w-5xl p-4">
        <img className="w-40" src="/logo-bg-wine.svg" />
      </header>
      <div className="container max-w-6xl flex flex-col flex-1 p-4 items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:flex-1 flex justify-center">
          <img className="w-full max-w-[240px] md:max-w-lg" src="/photo.png" />
        </div>
        <div className="flex flex-col flex-1 space-y-6">
          <h1 className="text-xl md:text-3xl font-bold text-center md:text-left">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>
          <a
            href="/signup"
            className="text-red-700 bg-white text-lg md:text-xl px-6 py-4 rounded-xl text-center"
          >
            Criar minha conta
          </a>
          <a
            href="/login"
            className="text-white border border-white text-lg md:text-xl px-6 py-4 rounded-xl text-center"
          >
            Fazer Login
          </a>
        </div>
      </div>
    </div>
  );
}
