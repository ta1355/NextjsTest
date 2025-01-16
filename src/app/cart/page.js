"use client";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import { age, name } from "./data.js";

export default function cart() {
  const router = useRouter();

  const handlelist = () => {
    router.push("/list");
  };

  return (
    <div className="title">
      <h4 onClick={handlelist}>Cart</h4>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <p>
        {age} : {name}
      </p>
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
