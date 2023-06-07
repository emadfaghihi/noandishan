import { useEffect } from "react";
import HomeCard from "./components/HomeCard";
import { useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import AppContainer from "../../components/shared/AppContainer";
import HomeApi from "../../services/api/HomeApi";
import { useQuery } from "react-query";

const Home = () => {
  // ANCHOR hook
  const navigete = useNavigate();
  const token = useAppSelector((state: RootState) => state.Auth.token);

  // ANCHOR API
  const { isLoading, error, data } = useQuery("repoData", HomeApi);


  // ANCHOR EFECT
  useEffect(() => {
    if (!token) navigete("/login");
  }, [token]);

  return (
    <AppContainer>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-4 ">
        {data?.data?.data.map((card: any) => (
          <HomeCard key={card.id} movie={card} />
        ))}
      </div>
    </AppContainer>
  );
};

export default Home;
