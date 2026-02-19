import { useState } from "react";

function SearchBar({ fetchUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();

    // 🚫 Prevent empty search
    if (!trimmedUsername) {
      alert("Please enter a GitHub username");
      return;
    }

    fetchUser(trimmedUsername);

    // ✅ clear input after search
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group input-group-lg shadow">
        <input
          type="text"
          className="form-control"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary px-4">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
