import RepoCard from "./RepoCard";
import "./RepoList.css";

function RepoList({ repos }) {
  return (
    <div className="repo-section">
      <h2>Repositories</h2>

      <div className="repo-grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
