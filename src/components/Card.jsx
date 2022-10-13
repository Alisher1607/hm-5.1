import HelloKittyCard from "./HelloKittyCard";

function Card(props) {
  const date = props.date.toLocaleString();
  return (
    <div className="card">
      <HelloKittyCard {...props.author} />
      <div className="card-two">
        <div>{props.text}</div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default Card;
