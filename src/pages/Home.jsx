import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지!</h1>
      <Link to={"/detail/1"}>Go to : Detail!</Link>
    </div>
  );
};

export default Home;
