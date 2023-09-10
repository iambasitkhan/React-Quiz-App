export default function Progress({
  index,
  numQuestion,
  points,
  totalPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestion} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} Points
      </p>
    </header>
  );
}
