import { Navbar } from "../../components/Navbar/Navbar";
import "../../scss/_Home.scss";
import TheFox from "../../assets/TheFox.png";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="startpage">
        <h1 className="startpage__title">Välkommen till Rossängs Zoo!</h1>
        <img src={TheFox} alt="The Fox on Rossängs Zoo" className="startpage__image" />
      </div>{" "}
    </>
  );
};
