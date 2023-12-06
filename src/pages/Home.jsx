import "../style/Pages.css";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <div className="container-fluid p-0">
        <div
          id="carouselExample"
          className="carousel slide mb-12 text-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src/images/Carousel-img-1.jpg"
                className="d-block CarouselImage mx-auto"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="src/images/Carousel-img-2.jpg"
                className="d-block CarouselImage mx-auto"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="src/images/Carousel-img-3.jpg"
                className="d-block CarouselImage mx-auto"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        <h1 className=" mb-3 homeHeading">
          <b>Welcome to the Official LESCO Website</b>
        </h1>
        <div className="container-fluid underLine mb-12"></div>
        <div className="container-fluid mb-20">
          <div className="row">
            {/* Headings */}
            <div className="col-md-4 homeHeading mb-3 uppercase"><b>Projects</b></div>
            <div className="col-md-4 homeHeading mb-3 uppercase"><b>News & Media</b></div>
            <div className="col-md-4 homeHeading mb-3 uppercase"><b>Departments</b></div>

            {/* Cards */}

            <div className="col-md-4">
              <a class="card homeCard" href="#">
                <img
                  src="src/images/card-img1.jpg"
                  class="mx-auto homeCardImg card-img-top"
                  alt="..."
                />
                
              </a>
            </div>
            <div className="col-md-4">
            <a class="card homeCard" href="#">
                <img
                  src="src/images/card-img2.jpg"
                  class="mx-auto homeCardImg card-img-top"
                  alt="..."
                />
                
              </a>
            </div>
            <div className="col-md-4">
            <a class="card homeCard" href="#">
                <img
                  src="src/images/card-img3.jpg"
                  class="mx-auto homeCardImg card-img-top"
                  alt="..."
                />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
