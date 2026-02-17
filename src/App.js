import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      setError("");

      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userRes.ok) throw new Error("User not found");

      const userData = await userRes.json();

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );

      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError("User not found");
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const topRepo = repos
    .slice()
    .sort((a, b) => b.stargazers_count - a.stargazers_count)[0];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        GitHub Profile Finder
      </h2>

      <SearchBar fetchUser={fetchUser} />

      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-dark"></div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {user && <ProfileCard user={user} />}

      {topRepo && (
        <div className="alert alert-success mt-3">
          🔥 Top Repo:
          <a
            href={topRepo.html_url}
            target="_blank"
            rel="noreferrer"
          >   
            {" "}
            {topRepo.name}
          </a>{" "}
          ⭐ {topRepo.stargazers_count}
        </div>
      )}

      {repos.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-4 text-center">
            Repositories
          </h4>

          <div className="row">
            {repos.slice(0, 12).map((repo) => (
              <div
                key={repo.id}
                className="col-md-6 col-lg-4 mb-4"
              >
                <div className="repo-card h-100 p-3 shadow-sm">
                  <h6 className="repo-title">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repo.name}
                    </a>
                  </h6>

                  <p className="repo-desc">
                    {repo.description || "No description"}
                  </p>

                  <div className="repo-footer">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
