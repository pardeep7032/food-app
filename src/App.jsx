import Checkout from './components/Checkout.jsx';
import "./index.css";
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgessContext.jsx";
import Cart from "./components/Cart.jsx";



function App() {
  return (
    <UserProgressContextProvider>

    <CartContextProvider>
    <Header/>
        <Meals />
        <Cart/>
      

        <Checkout></Checkout>
  
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
