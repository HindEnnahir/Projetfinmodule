import carousel1 from "../images/carousel_1.png";
import carousel2 from "../images/carousel_2.png";
import carousel3 from "../images/carousel_3.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel" // Activation de l'auto-slide
      data-bs-interval="3000" // Intervalle en millisecondes (3000 ms = 3 secondes)
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={carousel1}
            class="d-block w-100"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={carousel2}
            class="d-block w-100"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={carousel3}
            class="d-block w-100"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;