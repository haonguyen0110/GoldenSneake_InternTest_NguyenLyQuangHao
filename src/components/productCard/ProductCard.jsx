import React from "react";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import nike from "../../assets/nike.png";
import check from "../../assets/check.png";
import { ADDCART } from "../../redux/types/CartType";

export default function ProductCard(props) {
  const { shoesDefault } = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__top">
        <img className="card__top__logo" src={nike} alt="nike" />
      </div>
      <div className="card__title">Our Products</div>
      <div className="card__body">
        <div className="listItem">
          {shoesDefault.map((product) => {
            return (
              <div className="item" key={product.id}>
                <div
                  className="item__img"
                  style={{ backgroundColor: `${product.color}` }}
                >
                  <img src={product.image} alt="" />
                </div>
                <div className="item__name">{product.name}</div>
                <div className="item__description">{product.description}</div>
                <div className="item__bottom">
                  <div className="item__bottom__price">${product.price}</div>
                  <div
                    className={`item__bottom__btn ${product.clicked}`}
                    onClick={() => {
                      product.clicked = "clicked";
                      product.quantily = 1;
                      dispatch({
                        type: ADDCART,
                        shoeChoosing: product,
                      });
                    }}
                  >
                    <p>ADD TO CART</p>
                    <img src={check} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
