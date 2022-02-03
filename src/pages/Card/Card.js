import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ datas, setElement }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      {datas !== [] &&
        datas.map((data) => (
          <ul
            key={data.id}
            className="cardDataList"
            onClick={() => {
              setElement(data);
              navigate("/cardDetail");
            }}
          >
            <li className="cardData">{data.name}</li>
            <p style={{ color: `${data.color}` }}>{data.tag}</p>
          </ul>
        ))}
    </div>
  );
}
