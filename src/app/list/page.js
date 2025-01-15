import style from "./page.module.css";

export default function List() {
  return (
    <div>
      <h3 className="title">상품목록</h3>
      <div className={style.list}>
        <p>상품 1 : 40000원</p>
      </div>
      <div className={style.list}>
        <p>상품 2 : 20000원</p>
      </div>
    </div>
  );
}
