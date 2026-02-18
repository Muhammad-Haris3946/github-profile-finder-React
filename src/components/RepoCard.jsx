import "./RepoCard.css";

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3 className="repo-title">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>

      <p className="repo-desc">
        {repo.description || "No description available"}
      </p>

      <div className="repo-footer">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>

        {/* NEW: language badge */}
        {repo.language && (
          <span className="repo-language">{repo.language}</span>
        )}
      </div>
    </div>
  );
}

export default RepoCard;
