import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// const App = () => {
//   return <Home/>;
// };

// export default App;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/ProductList',
    element: <ProductList />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Cart',
    element: <Cart />
  },
  
  {
    path: '/404',
    element: <p>Page Not Found!</p>
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;