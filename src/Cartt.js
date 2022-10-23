import React from 'react'
function Cartt({ cartitem, removeFromCart }) {

  return (
    <>

      <ol class="list-group list-group-numbered list">
        {
          cartitem.map((items) => {
            return <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  {items.name} </div>
                Rs.{items.price}
              </div>
              <button onClick={() => {
                removeFromCart(items.id)


              }} class="badge bg-primary rounded-pill">X</button>
            </li>
          })
        }

      </ol>
      <h3>Total :Rs.{
        cartitem.reduce((prev, curr) => {
          return prev = prev + curr.price

        }, 0)
      } </h3>
    </>

  );

}

export default Cartt;