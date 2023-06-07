import { useEffect } from "react";
import { useGetMoviesQuery } from "../../store/api/HomeApi";
import HomeCard from "./components/HomeCard";
import { useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // ANCHOR hook
  const navigete = useNavigate();
  const token = useAppSelector((state: RootState) => state.Auth.token);

  const { data } = useGetMoviesQuery({});

  // ANCHOR EFECT
  useEffect(() => {
    if (!token) navigete("/login");
  }, [token]);

  console.log(data?.data);
  return data?.data.map((card) => <HomeCard key={card.id} movie={card} />);
};

export default Home;
