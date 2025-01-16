import style from "./page.module.css";

export default function cart() {
  return (
    <div className="title">
      <h4>Cart</h4>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </div>
  );
}

function CartItem() {
  return (
    <div className={style.cart}>
      <p>상품명</p>
      <p>40000</p>
      <p>1개</p>
    </div>
  );
}
