import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { TelaDoador } from "../pages/TelaDoador";
import { TelaRecebedor } from "../pages/TelaRecebedor";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/doador" element={<TelaDoador />} />
      <Route path="/recebedor" element={<TelaRecebedor />} />
    </Routes>
  );
}
