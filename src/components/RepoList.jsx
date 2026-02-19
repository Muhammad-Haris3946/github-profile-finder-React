import RepoCard from "./RepoCard";
import SkeletonCard from "./SkeletonCard";

function RepoList({ repos, loading }) {
  return (
    <>
      <h2 className="text-center mb-4">Repositories</h2>

      <div className="row g-4">
        {loading
          ? Array(6).fill().map((_, i) => (
              <div key={i} className="col-md-4">
                <SkeletonCard />
              </div>
            ))
          : repos.map(repo => (
              <div key={repo.id} className="col-md-4">
                <RepoCard repo={repo} />
              </div>
            ))}
      </div>
    </>
  );
}

export default RepoList;
