import { useState } from "react";
import githubApi from "../services/githubApi";

export default function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    const q = (username || "").trim();
    if (!q) return;

    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const [userRes, repoRes] = await Promise.all([
        githubApi.get(`/users/${q}`),
        githubApi.get(`/users/${q}/repos?per_page=60&sort=updated`),
      ]);

      setUser(userRes.data);
      setRepos(repoRes.data || []);
    } catch (err) {
      const status = err?.response?.status;

      if (status === 404) setError("User not found. Please check the username.");
      else if (status === 403) setError("Rate limit exceeded. Try again later.");
      else setError("Network/API error. Please try again.");

      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return { user, repos, loading, error, fetchUser };
}
