import React, { useMemo } from "react";
import useGithub from "./hooks/useGithub";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import ErrorCard from "./components/ErrorCard";
import StatsCard from "./components/StatsCard";
import Favorites from "./components/Favorites";


function App() {
  const { user, repos, loading, error, fetchUser } = useGithub();

  const sortedRepos = useMemo(() => {
    return [...repos].sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }, [repos]);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,#74ebd5,#acb6e5)"
      }}
    >
      <div className="container">

        <h1 className="text-center fw-bold mb-4">
          GitHub Profile Finder
        </h1>
        <Favorites fetchUser={fetchUser} />


        <SearchBar fetchUser={fetchUser} />

        {loading && <Loader />}

        {error && <ErrorCard message={error} />}

        {user && <ProfileCard user={user} />}

        {repos.length > 0 && <StatsCard repos={repos} />}

        {(loading || sortedRepos.length > 0) && (
          <RepoList repos={sortedRepos} loading={loading} />
        )}

      </div>
    </div>
  );
}

export default App;
