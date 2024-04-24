import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

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
