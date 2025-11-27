import { useEffect } from "react";

export function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer ticked");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Tes useEffect</h1>
    </>
  );
}
