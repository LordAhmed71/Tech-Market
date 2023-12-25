import "./Carousel.scss";
const Carousel = ({ children, cat = false }) => {
  return (
    <div className="carousel" style={{ padding: cat ? "0 10px" : "0" }}>
      {children}
    </div>
  );
};

export default Carousel;
