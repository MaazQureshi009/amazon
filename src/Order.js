import moment from "moment/moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckProduct from "./CheckProduct";
import "./Order.css";

function Order(order) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((item) => (
        <CheckProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />  
      ))}
      <CurrencyFormat
       renderText={(value) => (
            <h3 className="order_total">Order Total: {value}</h3>                    
            )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
    </div>
  );
}

export default Order;
