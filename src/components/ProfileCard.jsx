import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="card shadow p-4 text-center">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="rounded-circle mx-auto"
        width="150"
      />

<h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>

      <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
  <div className="badge-info p-2 rounded-pill fw-bold">
    Followers: {user.followers}
  </div>
  <div className="badge-warning p-2 rounded-pill fw-bold">
    Following: {user.following}
  </div>
  <div className="badge-success p-2 rounded-pill fw-bold">
    Repos: {user.public_repos}
  </div>
</div>


      <div className="mt-3 d-flex justify-content-center gap-2 flex-wrap">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          View Profile
        </a>

        <a
          href={`https://github.com/${user.login}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary"
        >
          Repositories
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
