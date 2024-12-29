import Image from "next/image";
import Link from "next/link";
type PostCardProps = {
  id: string;
  title: string;
  introduction: string;
  image: string;
  date: string;
  timeToRead: string;
  authorName: string;
  authorImage: string;
};
export default function PostCard({
  id,
  title,
  introduction,
  image,
  date,
  timeToRead,
  authorName,
  authorImage,
}: PostCardProps) {
  return (
    <div className="w-[460px] overflow-hidden shadow-md bg-white flex flex-col mx-auto transition-transform duration-300">
      {/* Hình ảnh bài viết */}
      <Link href={`/topic/post?id=${id}`} >
        <div className="relative w-full h-[400px] cursor-pointer overflow-hidden  ">
          <Image src={image} alt="Post image" fill className="object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </Link>
      
      <div className="p-6">
        {/* Thông tin tác giả */}
        <div className="flex items-center space-x-4 mb-1">
          <Image
            src={authorImage}
            alt={authorName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="text-sm">
            <p className=" text-[14px] text-gray-800">{authorName}</p>
            <p className="text-gray-500 mt-1 text-xs italic">
              {date} - {timeToRead}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 group ">
        {/* Tiêu đề bài viết */}
        <Link href={`/topic/post?id=${id}`}>
          <h2 className="text-[25px] font-bold text-gray-800  cursor-pointer group-hover:text-[#917237]">
            {title}
          </h2>
        </Link>

        {/* Mô tả bài viết */}
        <Link href={`/topic/post?id=${id}`}>
          <p className="text-gray-600 mt-4 text-[16px] cursor-pointer group-hover:text-[#917237]  ">
            {introduction.split(" ").slice(0, 34  ).join(" ")}...
          </p>
        </Link>
      </div>
    </div>
  );
}
