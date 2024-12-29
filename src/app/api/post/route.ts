import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: 400 } 
    );
  }
  const filePath = path.join(process.cwd(), "src", "app", "topic", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);
  const post = posts.find((item: any) => item.id === id);

  if (!post) {
    try
    {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 } 
      );
    }catch
    {
      return NextResponse.json(
        { error: "Internal Server Error, Please try again later" },
        { status: 500 } );
    }
    
  }

  return NextResponse.json(post); 
}