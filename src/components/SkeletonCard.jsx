function SkeletonCard() {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="placeholder-glow">
          <span className="placeholder col-6 mb-3"></span>
          <span className="placeholder col-12 mb-2"></span>
          <span className="placeholder col-8"></span>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
