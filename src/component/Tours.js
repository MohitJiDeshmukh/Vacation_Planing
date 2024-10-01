import Cards from "./Cards";

const tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div className="title">Vacation 🏖️ Plans With ❣️</div>
      <div className="cards">
        {tours.map((tour) => {
          return <Cards key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default tours;
