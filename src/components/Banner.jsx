const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/TgWJH3d/Sub-Container-2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-5xl font-bold">The Best Streaming Experience</h1>
          <p className="mb-5 lg:text-2xl">
          StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy the latest blockbusters, classic movies, popular TV shows, and more.
          </p>
          <button className="btn btn-primary">Start Watching Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
