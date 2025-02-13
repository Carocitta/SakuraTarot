import Header from "../components/Header/Header";
import { useParams, useLocation } from "react-router-dom";

function Reading() {
  const { id } = useParams();  
  const location = useLocation();  
  console.log(location);
  const name = location.state?.name || "Algo ha ido mal.";
  const past = location.state?.past || "Algo ha ido mal.";
  const present = location.state?.present || "Algo ha ido mal.";
  const future = location.state?.future || "Algo ha ido mal.";

  return (
    <>
      <Header />

      <ul>
        <li>Name: {location.state.name}</li>
        <li>Past: {past}</li>
        <li>Present: {present}</li>
        <li>Future: {future}</li>
      </ul>
    </>
  );
}

export default Reading;
      
