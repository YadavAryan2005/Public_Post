import { NextResponse } from "next/server";
import blogs from "../../../../../model/Blog";
export async function GET(params: {
  params: { id: string };
}): Promise<NextResponse> {
  try {
    const data = await blogs.findById(params.params.id);
    if (!data) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: Error("Something went wrong") },
      { status: 500 }
    );
  }
}
