import "./CardDetail.css";

export default function CardDetail({ name, color, tag, criteria }) {
  return (
    <div className="cardDetail">
      <ul className="cardDetailList">
        <li>{name}</li>
        <p style={{ color: `${color}` }}>{tag}</p>
      </ul>
      {criteria.map(({ type, text, variable }, idx) => (
        <div className="cardDetailCriteria" key={type}>
          <li>{text}</li>
          {idx !== criteria.length - 1 && (
            <p className="cardDetailCriteriaText">and</p>
          )}
        </div>
      ))}
    </div>
  );
}
