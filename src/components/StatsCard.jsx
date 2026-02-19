function StatsCard({ repos }) {
  if (!repos.length) return null;

  // total stars
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  // total forks
  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  // most used language
  const languages = {};
  repos.forEach(repo => {
    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }
  });

  const topLanguage =
    Object.keys(languages).length > 0
      ? Object.keys(languages).reduce((a, b) =>
          languages[a] > languages[b] ? a : b
        )
      : "N/A";

  return (
    <div className="row text-center my-4">

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h6>Total Stars</h6>
          <h4>⭐ {totalStars}</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h6>Total Forks</h6>
          <h4>🍴 {totalForks}</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h6>Top Language</h6>
          <h4>{topLanguage}</h4>
        </div>
      </div>

    </div>
  );
}

export default StatsCard;
