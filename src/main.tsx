import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/redux/feature/store.ts";
import Header from "../src/Shared/Header/Header.jsx";
import Footer from "../src/Shared/Footer/Footer.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Header></Header>
      <App />
      <Footer></Footer>
    </Provider>
  </StrictMode>
);
