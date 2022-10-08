import MatchCard from "~/components/MatchCard";
import Icon from "~/components/Icon";
import DateSelect from "../../components/DateSelect";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format, formatISO } from "date-fns";
import { useLocalStorage, useAsyncFn } from "react-use";
import axios from "axios";

function Profile() {
  const params = useParams();
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(
    formatISO(new Date(2022, 10, 20))
  );

  const [auth, setAuth] = useLocalStorage("auth", {});

  const [{ value: user, loading, error }, fetchBets] = useAsyncFn(async () => {
    const res = await axios({
      method: "get",
      baseURL: import.meta.env.VITE_API_URL,
      url: `/${params.username}`,
    });

    const bets = res.data.bets.reduce((acc, bet) => {
      acc[bet.matchId] = bet;
      return acc;
    }, {});

    return {
      ...res.data,
      bets,
    };
  });

  //recebendo os dados
  const [matches, fetchMatches] = useAsyncFn(async (params) => {
    const res = await axios({
      method: "get",
      baseURL: import.meta.env.VITE_API_URL,
      url: "/matches",
      params,
    });
    return res.data;
  });

  const isLoading = matches.loading || loading;
  const hasError = matches.error || error;
  const isDone = !isLoading && !hasError;

  const logout = () => {
    setAuth({});
    navigate("/login");
  };

  useEffect(() => {
    fetchBets();
  }, []);

  useEffect(() => {
    fetchMatches({ gameTime: currentDate });
  }, [currentDate]);

  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl flex justify-between">
          <img className="w-28 md:w-40" src="/logo-bg-red.svg" />
          {auth?.user?.id && (
            <div className="cursor-pointer" onClick={logout}>
              Sair
            </div>
          )}
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard">
              <Icon name="back" />
            </a>
            <h3 className="text-2xl font-bold">{user?.name}</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-xl text-red-500 font-bold">Seus palpites</h2>

          <DateSelect currentDate={currentDate} onChange={setCurrentDate} />

          <div className="space-y-4">
            {isLoading && "Carregando jogos..."}
            {hasError && "Ops, algo deu errado."}

            {isDone &&
              matches.value?.map((match) => (
                <MatchCard
                  key={match.id}
                  matchId={match.id}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  gameTime={format(new Date(match.gameTime), "H:mm")}
                  homeTeamScore={user?.bets?.[match.id]?.homeTeamScore || ""}
                  awayTeamScore={user?.bets?.[match.id]?.awayTeamScore || ""}
                  disabled={true}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
