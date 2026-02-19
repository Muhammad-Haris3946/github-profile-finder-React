function RepoCard({ repo }) {

  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    C: "#555555",
    "C++": "#f34b7d",
    Go: "#00ADD8",
    Rust: "#dea584",
    PHP: "#4F5D95",
    Ruby: "#701516"
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        <h6 className="fw-bold">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </h6>

        <p className="text-muted small">
          {repo.description || "No description"}
        </p>

        <div className="d-flex justify-content-between small">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>

        {repo.language && (
          <div className="mt-2 d-flex align-items-center gap-2">
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  languageColors[repo.language] || "#999"
              }}
            ></span>

            <span className="small text-muted">
              {repo.language}
            </span>
          </div>
        )}

      </div>
    </div>
  );
}

export default RepoCard;
