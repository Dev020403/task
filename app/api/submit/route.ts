import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      console.log("Form submitted:",formData);

      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 },
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 500 }
    );
  }
}
