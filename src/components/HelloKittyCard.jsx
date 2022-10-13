import './HelloKittyCard.css'

const HelloKittyCard = (props) => {
  return (
    <div className="helloKittyCard">
      <img src={props.avatarUrl} alt="" />
      <div>{props.name}</div>
    </div>
  );
};

export default HelloKittyCard;
