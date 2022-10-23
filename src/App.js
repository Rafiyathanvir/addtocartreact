import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Cartt from './Cartt';
import { useState } from 'react';
import Popup from './Popup';
import './compends/popup.css';
import { FaCartArrowDown
} from 'react-icons/fa';
function App() {
  const [products, setProducts] = useState([{
    id: 1,
    name: "iphone 11",
    price: 100000,
    isadded: false


  },
  {
    id: 2,
    name: "ipad",
    price: 50000,
    isadded: false


  },
  {
    id: 3,
    name: "iphone12pro",
    price: 150000,
    isadded: false

  },
  {
    id: 4,
    name: "Mackbook12 ",
    price: 200000,
    isadded: false


  },
  {
    id: 5,
    name: "iwatch",
    price: 500000,
    isadded: false
  },
  {
    id: 6,
    name: "mackpro",
    price: 100000,
    isadded: false
  }])
  const [cartitem, setcartitem] = useState([])
  let addtoCart = (product) => {
    setcartitem([...cartitem, product])
  }
  let removeFromCart = (product) => {
    const indexVal = cartitem.findIndex(obj => obj.id === product.id);
    cartitem.splice(indexVal, 1)
    setcartitem([...cartitem])
  }

  const [Button, popupbutton] = useState(false)


  return (

    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>

            </ul>


               <div>
              <button onClick={() => popupbutton(true)}>
              <i class="bi-cart-fill me-1"></i>
              <FaCartArrowDown/><span class="badge bg-dark text-white ms-1 rounded-pill"> 
{cartitem.length}</span>
              </button>

              <Popup trigger={Button} setTrigger={popupbutton}>
                  <div>
                    <h3>Cart</h3>
                    <Cartt cartitem={cartitem} removeFromCart={removeFromCart} />

                </div>
              </Popup>
              </div>
            
          </div>
        </div>
      </nav>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='row'>
              {
                products.map((product) => {
                  return <Cart product={product} addtoCart={addtoCart} cartitem={cartitem} />
                })
              }

            </div>
          </div>

        </div>
      </div>



    </>

  );

}

export default App;
