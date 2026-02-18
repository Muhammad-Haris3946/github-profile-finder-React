import { useState } from "react";
import githubApi from "../services/githubApi";

export default function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userRes = await githubApi.get(`/users/${username}`);
      setUser(userRes.data);

      const repoRes = await githubApi.get(`/users/${username}/repos?per_page=30&sort=updated`);
      // sort by stars for top repos
      const topRepos = repoRes.data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 9);

      setRepos(topRepos);
    } catch (err) {
      setError("User not found. Try another username.");
    } finally {
      setLoading(false);
    }
  };

  return { user, repos, loading, error, fetchUser };
}
