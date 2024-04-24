import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout";
import "./global.css";
const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </>
  );
};

export default App;
