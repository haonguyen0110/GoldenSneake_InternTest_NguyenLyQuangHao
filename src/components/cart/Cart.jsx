import React from "react";
import nike from "../../assets/nike.png";
import remove from "../../assets/trash.png";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import { ADD_MORE, DECREASE, REMOVE_CART } from "../../redux/types/CartType";
export default function Cart() {
  const { shoeChoosing } = useSelector((state) => state.CartReducer);
  localStorage.setItem("cartItems", JSON.stringify(shoeChoosing));
  const dispatch = useDispatch();
  const renderCartItem = () => {
    if (shoeChoosing && shoeChoosing.length > 0) {
      return shoeChoosing.map((item) => {
        return (
          <div className={`cart__item `} key={item.id}>
            <div className="cart__item--left">
              <div
                className="cart__item__img"
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className="cart__item__img__block">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>

            <div className="cart__item--right">
              <div className="cart__item__name">{item.name}</div>
              <div className="cart__item__price">${item.price}</div>
              <div className="cart__item__action">
                <div className="cart__item__count">
                  <div
                    className="cart__item__count__button"
                    onClick={() => {
                      let DEIndex = shoeChoosing.indexOf(item);

                      dispatch({
                        type: DECREASE,
                        DEIndex: DEIndex,
                        rmID: item.id,
                      });
                    }}
                  >
                    -
                  </div>
                  <div className="cart__item__count__number">
                    {item.quantily}
                  </div>
                  <div
                    className="cart__item__count__button"
                    onClick={() => {
                      let addIndex = shoeChoosing.indexOf(item);

                      dispatch({
                        type: ADD_MORE,
                        addIndex: addIndex,
                      });
                    }}
                  >
                    +
                  </div>
                </div>
                <div
                  className="cart__item__remove"
                  onClick={() => {
                    let rmIndex = shoeChoosing.indexOf(item);

                    dispatch({
                      type: REMOVE_CART,
                      rmIndex: rmIndex,
                      rmID: item.id,
                    });
                  }}
                >
                  <img src={remove} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <p>Your cart is empty</p>;
    }
  };
  return (
    <div className="card">
      <div className="card__top">
        <img className="card__top__logo" src={nike} alt="nike" />
      </div>
      <div className="card__title">
        Your Cart
        <span className="card__title__amount">
          $
          {shoeChoosing
            .reduce((total, item) => {
              return (total += item.price * item.quantily);
            }, 0)
            .toFixed(2)}
        </span>
      </div>
      <div className="card__body">
        <div className="cart__list">{renderCartItem()}</div>
      </div>
    </div>
  );
}
