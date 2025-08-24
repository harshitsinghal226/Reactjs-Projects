import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img
          className="back"
          src="/images/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
