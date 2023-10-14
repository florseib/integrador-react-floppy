import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "./HomePage";
import { Store } from "./StorePage";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { Register } from "./Register";
import { Success } from "./Success";
import { Purchase } from "./Purchase";
import { Verify } from "./Verify";

export const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <ReactRoutes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
      </ReactRoutes>
      <Footer></Footer>
    </Router>
  );
};
