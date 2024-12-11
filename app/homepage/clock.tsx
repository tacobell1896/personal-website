'use client'
export default function Clock() {
  const currentTime = new Date();
  return <span>{currentTime.toLocaleTimeString()}.</span>;
}
