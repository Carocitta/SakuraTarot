import Header from "../components/Header/Header";
import { useParams, useLocation } from "react-router-dom";

function Reading() {
  const { id } = useParams();  
  const location = useLocation();  
  console.log(location);
  const name = location.state?.name || "Something went wrong";
  const past = location.state?.past || "Something went wrong";
  const present = location.state?.present || "Something went wrong";
  const future = location.state?.future || "Something went wrong";

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
