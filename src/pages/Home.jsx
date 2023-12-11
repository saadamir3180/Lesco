import "../style/Pages.css";
import "../style/Home.css";
import Img1 from '../assets/Carousel-img-1.jpg'
import Img2 from '../assets/Carousel-img-2.jpg'
import Img3 from '../assets/Carousel-img-3.jpg'
import Img4 from '../assets/card-img1.jpg'
import Img5 from '../assets/card-img2.jpg'
import Img6 from '../assets/card-img3.jpg'

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
                src={Img1}
                className="d-block CarouselImage mx-auto"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img2}
                className="d-block CarouselImage mx-auto"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img3}
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
        <div className="container-fluid mb-16">
          <div className="row">
         
            {/* Cards */}

            {/* <div className="col-md-4 mb-4">
            <h1 className="homeHeading mb-3 uppercase"><b>Projects</b></h1>
              <a class="card homeCard" href="#">
                <img
                  src={Img4}
                  class="mx-auto homeCardImg card-img-top"
                  alt="..."
                />
                
              </a>
            </div> */}
            <div className="col-md-4">
            <h1 className="homeHeading mb-3 uppercase"><b>News & Media</b></h1>
            <a class="card homeCard" href="#">
                <img
                  src={Img5}
                  class="mx-auto homeCardImg card-img-top"
                  alt="..."
                />
                
              </a>
            </div>
            <div className="col-md-4 mb-4">
            <h1 className="homeHeading mb-3 uppercase"><b>Departments</b></h1>
            <a class="card homeCard" href="#">
                <img
                  src={Img6}
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
