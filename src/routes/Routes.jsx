import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "./HomePage";
import { Store } from "./Store";

export const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <ReactRoutes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/store" element={<Store />}></Route>
        {/* <Route path="/pokeapi" element={<PokeApi />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route> */}
      </ReactRoutes>
      <Footer></Footer>
    </Router>
  );
};
