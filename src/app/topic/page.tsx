import fs from "fs";
import path from "path";
import PostList from "./components/PostList";
export default async function TopicPage() {
  const filePath = path.join(process.cwd(), "src", "app", "topic", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);
  return (
    <div style={{ padding: "60px", background: "#f9f9f9" }}>
      <PostList posts={posts} />
    </div>
  );
}