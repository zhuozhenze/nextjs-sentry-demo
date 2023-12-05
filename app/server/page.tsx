import * as Sentry from "@sentry/nextjs";
import { headers } from "next/headers";

export default function Server() {
  async function myServerAction(formData: FormData) {
    "use server";
    return await Sentry.withServerActionInstrumentation(
      "myServerAction", // The name you want to associate this Server Action with in Sentry
      {
        formData, // Optionally pass in the form data
        headers: headers(), // Optionally pass in headers
        recordResponse: true, // Optionally record the server action response
      },
      async () => {
        // ... Your Server Action code

        return { name: "John Doe" };
      }
    );
  }

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
      <form
        action={myServerAction}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          name="some-input-value"
          style={{ border: "1px solid blue" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "grey",
            color: "#ffffff",
            padding: "5px 10px",
            marginTop: 10,
          }}
        >
          上报transaction到sentry
        </button>
      </form>
    </div>
  );
}
