import { useState, useEffect } from "react";
import MatchCard from "~/components/MatchCard";
import Icon from "~/components/Icon";
import DateSelect from "../../components/DateSelect";
import { useLocalStorage, useAsyncFn } from "react-use";
import axios from "axios";
import { format, formatISO } from "date-fns";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function Dashboard() {
  const [currentDate, setCurrentDate] = useState(
    formatISO(new Date(2022, 10, 20))
  );

  const [auth] = useLocalStorage("auth", {});

  const [{ value: user, loading, error }, fetchBets] = useAsyncFn(async () => {
    const res = await axios({
      method: "get",
      baseURL: import.meta.env.VITE_API_URL,
      url: `/${auth.user.username}`,
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

  useEffect(() => {
    fetchBets();
  }, []);

  useEffect(() => {
    fetchMatches({ gameTime: currentDate });
  }, [currentDate]);

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <header className="bg-red-500 text-white">
        <div className="container max-w-3xl flex justify-between p-4">
          <img className="w-28 md:w-40" src="/logo-bg-red.svg" />
          <a href={`/${auth?.user?.username}`}>
            <Icon name="profile" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>{`Ol?? ${auth?.user?.name}`}!</span>
            <h3 className="text-2xl font-bold">Qual ?? o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect currentDate={currentDate} onChange={setCurrentDate} />

          <div className="flex flex-col items-center space-y-4">
            {isLoading && <ThreeDots color="#AF053F" height="28" width="28" />}
            {hasError && "Ops, algo deu errado."}

            {isDone &&
              matches.value?.map((match) => (
                <MatchCard
                  key={match.id}
                  matchId={match.id}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  gameTime={format(new Date(match.gameTime), "H:mm")}
                  homeTeamScore={user?.bets?.[match.id]?.homeTeamScore}
                  awayTeamScore={user?.bets?.[match.id]?.awayTeamScore}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
