export default function Dot({ x, y, highlight }) {
  return (
    <div
      className={`dot ${highlight ? 'highlight' : ''}`}
      style={{ left: x - 8, top: y - 8 }}
    />
  );
}