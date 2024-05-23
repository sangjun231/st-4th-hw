import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1>디테일 페이지!</h1>
      <p>{params.id}</p>
      <Link to={"/"}>Go to : Home!</Link>
    </div>
  );
};

export default Detail;
