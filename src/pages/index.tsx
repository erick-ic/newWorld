import DateDisplayBox from "../components/dateDisplay";
import "./index.less";

export default function HomePage() {
  return (
    <div className="main">
      <span style={{ color: "black" }}>hello</span>
      &nbsp; &nbsp;
      <span style={{ color: "orange" }}>world~</span>
      <DateDisplayBox />
    </div>
  );
}
