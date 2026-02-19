function ProfileCard({ user }) {
  return (
    <div className="card text-center shadow-lg p-4 mb-4 rounded-4">
      
      <img
        src={user.avatar_url}
        alt={user.login}
        className="rounded-circle border border-primary border-4 mx-auto"
        width="150"
      />

      <h2 className="mt-3 fw-bold">
        {user.name || user.login}
      </h2>

      <p className="text-muted">
        {user.bio || "No bio available"}
      </p>

      <div className="d-flex justify-content-center gap-3 my-3 flex-wrap">
        <span className="badge bg-info fs-6 p-2">
          Followers: {user.followers}
        </span>

        <span className="badge bg-warning text-dark fs-6 p-2">
          Following: {user.following}
        </span>

        <span className="badge bg-success fs-6 p-2">
          Repos: {user.public_repos}
        </span>
      </div>

      {/* BUTTONS */}
      <div className="d-flex justify-content-center gap-3 flex-wrap">

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark px-4"
        >
          View Profile
        </a>

        <a
          href="#repos"
          className="btn btn-outline-primary px-4"
        >
          Repositories
        </a>

        <button
          className="btn btn-warning px-4"
          onClick={() => {
            const saved =
              JSON.parse(localStorage.getItem("favorites")) || [];

            const exists = saved.find(
              u => u.login === user.login
            );

            if (!exists) {
              localStorage.setItem(
                "favorites",
                JSON.stringify([...saved, user])
              );
              alert("Added to favorites ⭐");
            } else {
              alert("Already saved!");
            }
          }}
        >
          ⭐ Save Profile
        </button>

      </div>
    </div>
  );
}

export default ProfileCard;
