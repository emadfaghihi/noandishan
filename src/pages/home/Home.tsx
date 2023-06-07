import { useEffect } from "react";
import { useGetMoviesQuery } from "../../store/api/HomeApi";
import HomeCard from "./components/HomeCard";
import { useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import AppContainer from "../../components/shared/AppContainer";

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
  return (
    <AppContainer>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-4 ">
        {data?.data.map((card) => (
          <HomeCard key={card.id} movie={card} />
        ))}
      </div>
    </AppContainer>
  );
};

export default Home;
