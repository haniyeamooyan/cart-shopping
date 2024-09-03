import {Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";

import Navbar from "./components/Navbar.tsx";
import Shop from "./pages/Shop.tsx";
import { CartProvider } from "./context/CartContext.tsx";

function App() {

  return (
    <CartProvider>
    <Container>
        <Navbar/>
        <Routes>
            <Route index element={<Shop />} />

        </Routes>
    </Container>
    </CartProvider>
  )
}

export default App
