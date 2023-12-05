"use client";

export default function Client() {
  const throwError = () => {
    throw new Error("this is a client error");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>上报异常到sentry</div>
      <button
        onClick={throwError}
        style={{
          backgroundColor: "grey",
          color: "#ffffff",
          padding: "5px 10px",
        }}
      >
        点我报错
      </button>
    </div>
  );
}
