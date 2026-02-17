import React, { useState } from "react";

function SearchBar({ fetchUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    fetchUser(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />
        <button className="btn btn-dark">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
