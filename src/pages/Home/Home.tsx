import { Navbar } from "../../components/Navbar/Navbar";
import "../Home/Home.scss";
import TheFox from "../../assets/TheFox.png";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <h1>Välkommen till Rossängs Zoo!</h1>
      <img src={TheFox} alt="The Fox on Rossängs Zoo" />
    </>
  );
};
