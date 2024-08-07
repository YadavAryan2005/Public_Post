import { NextResponse } from "next/server";
import { connect, disconnect } from "../../../utils/connect";
import blogs,{BlogDocument} from "../../../../model/Blog";

export async function GET(): Promise<NextResponse> {
  try {
    await connect(); // Establish the database connection
    
    // Fetch the documents and convert them to an array
    const data:BlogDocument[]= await blogs.find();

    // Return the data in JSON format
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new NextResponse("Failed to fetch blogs", { status: 500 });
  } finally {
    await disconnect(); // Ensure the database connection is closed
  }
}
