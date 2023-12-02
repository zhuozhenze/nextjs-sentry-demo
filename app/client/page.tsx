"use client";

export default function Client() {
  const throwError = () => {
    throw new Error("this is a client error");
  };

  return (
    <div>
      <button onClick={throwError}>点我报错</button>
    </div>
  );
}
