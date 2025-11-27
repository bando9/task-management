import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function CounterIncrement() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? Number(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h1>From counter</h1>
      <Card className="w-2xs flex justify-center items-center"> {count} </Card>
      <div className="space-x-5">
        <Button onClick={() => handleIncrement()}>Increment</Button>
        <Button onClick={() => handleReset()}>Reset</Button>
      </div>
    </>
  );
}
