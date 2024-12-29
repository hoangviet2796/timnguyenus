"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../components/PostConten";
export default function PostDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (id) {
      fetch(`/api/post?id=${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Post not found");
          }
          return res.json();
        })
        .then((data) => {
          setPost(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!post) {
    return
  }
  return (
    <div className="max-w-[1280px] mx-auto py-12  box-border ">
  {/* Thông tin tác giả */}
  <div className="flex items-center text-sm text-gray-600 mb-6 space-x-2">
    {/* Ảnh đại diện */}
    <Image
      src={post.authorImage}
      alt={post.authorName}
      width={40}
      height={40}
      className="rounded-full object-cover"
    />
    {/* Thông tin chi tiết */}
    <span className="font-medium text-sm text-gray-700">{post.authorName}</span>
    <span>•</span>
    <span className="font-medium text-sm text-gray-700">{post.date}</span>
    <span>•</span>
    <span className="font-medium text-sm text-gray-700">{post.timeToRead}</span>
  </div>
  {/* Tiêu đề bài viết */}
  <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-relaxed">{post.title}</h1>
  {/* Phần giới thiệu */}
  <p className="text-lg font-bol text-black mb-8 leading-8">{post.introduction}</p>
  {/* Nội dung */}
  <PostContent content={post.content} conclusion={post.conclusion} />
   
   {/* Nút quay lại */}
   <div className="flex justify-center mt-12">
      <Link
        href="/topic"
        className="bg-blue-500 text-white rounded-full px-4 py-2 shadow-lg hover:bg-blue-600 transition duration-300 hover:underline"
        aria-label="Quay lại"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Xem Tất Cả Bài Viết
      </Link>
    </div>  
</div>

  );
}
