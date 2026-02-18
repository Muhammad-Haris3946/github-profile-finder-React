import "./ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img className="avatar" src={user.avatar_url} alt="avatar" />
      <h2>{user.name || user.login}</h2>
      <p className="bio">{user.bio || "No bio available"}</p>

      <div className="badges">
        <span className="badge followers">Followers: {user.followers}</span>
        <span className="badge following">Following: {user.following}</span>
        <span className="badge repos">Repos: {user.public_repos}</span>
      </div>

      <div className="profile-buttons">
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button className="btn-dark">View Profile</button>
        </a>
        <a href={`${user.html_url}?tab=repositories`} target="_blank" rel="noreferrer">
          <button className="btn-outline">Repositories</button>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
