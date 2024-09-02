const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp4180144.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mx-auto p-4 md:p-0">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-sm md:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <p className="font-mono text-1xl mt-20 mb-0 text-center">
        SHOP BY CATEGORY
      </p>
      <p className="font-mono font-bold text-3xl md:text-5xl mt-0 mb-10 md:mb-20 text-center text-pink-600 hover:text-yellow-700 uppercase">
        Fine drapes, ready-to-wear styles, and more
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array(9)
          .fill()
          .map((_, index) => (
            <div key={index} className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </section>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div className="text-center lg:text-left lg:mr-8">
            <h1 className="text-4xl md:text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 text-sm md:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <p className="font-mono text-1xl mt-20 mb-0 text-center">
        SHOP BY OCCASION
      </p>
      <p className="font-mono font-bold text-3xl md:text-5xl mt-0 mb-10 md:mb-20 text-center text-pink-600 hover:text-yellow-700 uppercase">
        Styles for special events & everyday moments
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div key={index} className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </section>

      <p className="font-mono text-1xl mt-20 mb-0 text-center">IN THE SPOTLIGHT</p>
      <p className="font-mono font-bold text-3xl md:text-5xl mt-0 mb-10 md:mb-20 text-center text-pink-600 hover:text-yellow-700 uppercase">
        Unique Indian block prints
      </p>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Spotlight"
            className="object-cover"
          />
        </div>
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Spotlight"
            className="object-cover"
          />
        </div>
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Spotlight"
            className="object-cover"
          />
        </div>
        {/* Add more carousel items as needed */}
      </div>

      <p className="font-mono text-1xl mt-20 mb-0 text-center">TESTIMONIALS</p>
      <p className="font-mono font-bold text-3xl md:text-5xl mt-0 mb-10 md:mb-20 text-center text-pink-600 hover:text-yellow-700 uppercase">
        Speaking from their hearts
      </p>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Testimonials"
            className="object-cover"
          />
        </div>
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Testimonials"
            className="object-cover"
          />
        </div>
        <div className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Testimonials"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
