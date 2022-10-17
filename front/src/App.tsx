import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </HashRouter>
    </Provider>

  );
}