import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("Requested id from client:", id);

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }
    const baseUrl = "https://hoangviet2796.github.io/timnguyenus";
    const response = await fetch(`${baseUrl}/data.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const posts = await response.json();
    const post = posts.find((item: any) => String(item.id) === String(id));

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error, Please try again later" },
      { status: 500 }
    );
  }
}  