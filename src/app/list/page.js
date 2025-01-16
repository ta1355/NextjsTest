import Image from "next/image";
import style from "./page.module.css";
let 상품 = ["Tomatoes", "pasta", "Coconut"];
let 가격 = [40000, 20000, 10000];

let array = [2, 3, 4];

let a = array.map((a) => {
  return 10;
});

console.log(a);

export default function List() {
  return (
    <div>
      <h3 className="title">상품목록</h3>
      {상품.map((a, i) => {
        return (
          <div className={style.list} key={i}>
            <Image
              className={style.img}
              src={"/95a05c8b-28be-42fa-a2fe-c31c0a789eef.jpg"}
              alt="고양이"
              width={500}
              height={300}
            ></Image>
            <p>
              {a} : {가격[i]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
