import { useGetMoviesQuery } from "../../store/api/HomeApi";
import HomeCard from "./components/HomeCard";

const Home = () => {
  const { data } = useGetMoviesQuery({});

  console.log(data?.data);
  return data?.data.map((card) => <HomeCard key={card.id} movie={card} />);
};

export default Home;
