// src/App.js
import React, { useMemo } from "react";
import useGithub from "./hooks/useGithub";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const { user, repos, loading, error, fetchUser } = useGithub();

  const sortedRepos = useMemo(() => {
    return [...repos].sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }, [repos]);

  return (
    <div className="app">
      <div className="container py-5">
        <h1 className="text-center mb-4">GitHub Profile Finder</h1>

        <SearchBar fetchUser={fetchUser} />

        {loading && <Loader />}

        {error && (
          <div className="alert alert-danger mt-3">{error}</div>
        )}

        {user && <ProfileCard user={user} />}

        {sortedRepos.length > 0 && <RepoList repos={sortedRepos} />}
      </div>
    </div>
  );
}

export default App;
