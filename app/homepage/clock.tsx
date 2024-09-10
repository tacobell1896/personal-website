export default function Clock() {
  return <span>{new Date().toLocaleTimeString()}.</span>;
}
