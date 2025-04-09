import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import { Provider } from "react-redux";
import appStore from "./store/store";

function App() {
  return (
    <Provider  store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
