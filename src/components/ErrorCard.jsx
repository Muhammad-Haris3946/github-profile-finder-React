function ErrorCard({ message }) {
  return (
    <div className="card shadow-lg text-center p-4 mb-4 rounded-4 border-0">

      <div className="mb-3">
        <div
          className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mx-auto"
          style={{ width: "80px", height: "80px", fontSize: "36px" }}
        >
          ⚠
        </div>
      </div>

      <h4 className="fw-bold text-danger">Something went wrong</h4>

      <p className="text-muted mb-3">
        {message || "User not found or API limit reached"}
      </p>

      <p className="small text-secondary">
        Please check the username and try again.
      </p>

    </div>
  );
}

export default ErrorCard;
