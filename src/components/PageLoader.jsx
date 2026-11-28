
export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-content">

        <div className="loader-orbit">
          <div className="orbit-ring"></div>
          <div className="orbit-ring ring-two"></div>

          <div className="loader-core">
            M
          </div>
        </div>

        <h2>
          Loading<span className="loader-dots">...</span>
        </h2>

        <p>PREPARING YOUR EXPERIENCE</p>

        <div className="loader-progress">
          <span></span>
        </div>

        <small>PLEASE WAIT A MOMENT</small>

      </div>
    </div>
  );
}
