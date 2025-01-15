export default function Home() {
  let name = "yoo";
  let age = 20;
  return (
    <div>
      <h4 className="title">티 매거진</h4>
      <p className="title-sub">
        made by {name} {age}
      </p>
      <a href="https://google.co.kr">구글</a>
    </div>
  );
}
