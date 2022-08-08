import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App';
import Collserola from './components/Collserola';
import Delta from './components/Delta';
import Garraf from './components/Garraf';
import Montseny from './components/Montseny';
import Montserrat from './components/Montserrat';
import Pedraforca from './components/Pedraforca';
import SantLloren from './components/SantLloren';
import Vallvidrera from './components/Vallvidrera';
import Home from './components/Home';
import NotFound from './components/NotFound';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Collserola" element={<Collserola />} />
          <Route path="/Delta" element={<Delta />} />
          <Route path="/Garraf" element={<Garraf />} />
          <Route path="/Montserrat" element={<Montserrat />} />
          <Route path="/Pedraforca" element={<Pedraforca />} />
          <Route path="/SantLloren" element={<SantLloren />} />
          <Route path="/Vallvidrera" element={<Vallvidrera />} />
          <Route path="/Montseny" element={<Montseny />} />

          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
