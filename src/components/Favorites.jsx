import { useEffect, useState } from "react";

function Favorites({ fetchUser }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  if (!favorites.length) return null;

  return (
    <div className="card shadow-sm p-3 mb-4">
      <h5 className="mb-3">⭐ Favorite Profiles</h5>

      <div className="d-flex flex-wrap gap-2">
        {favorites.map(user => (
          <button
            key={user.id}
            className="btn btn-outline-primary btn-sm"
            onClick={() => fetchUser(user.login)}
          >
            {user.login}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
