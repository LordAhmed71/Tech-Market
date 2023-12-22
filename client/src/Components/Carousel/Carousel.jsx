import "./Carousel.scss";

const Carousel = ({ children, cat = false }) => {
  return (
    <div className="carousel" style={{ padding: cat ? "20px 10px" : "20px 0" }}>
      {children}
    </div>
  );
};

export default Carousel;
