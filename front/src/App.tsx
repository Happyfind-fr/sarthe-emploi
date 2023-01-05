import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

import socket, { SocketContext } from './boot/socket.io';
import HomePage from "./pages/HomePage";
import ChatDashboard from './pages/ChatDashboard';
import OfferPage from './pages/OfferPage';
import AdminPage from './pages/AdminPage';

import './App.css'

export default function App(): JSX.Element {

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chat' element={<ChatDashboard />} />
            <Route path='/offers' element={<OfferPage />} />
            <Route path='/admin' element={<AdminPage />} />            
          </Routes>
        </HashRouter>
      </Provider>
    </SocketContext.Provider>
  );
}