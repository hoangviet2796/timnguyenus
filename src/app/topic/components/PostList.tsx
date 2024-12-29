import PostCard from './Postcard';

export type Post = {
  id: string;
  title: string;
  introduction: string;
  image: string;
  date: string;
  timeToRead: string;
  authorName: string;
  authorImage: string;
};

type PostListProps = {
  posts: Post[]; // 
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-[950px] mx-auto"
    >
      {posts.map((post) => (
        
        <PostCard
          key={post.id}
          id = {post.id}
          title={post.title}
          introduction={post.introduction}
          image={post.image}
          date={post.date} 
          timeToRead={post.timeToRead} 
          authorName={post.authorName}
          authorImage={post.authorImage}
        />
      ))}
    </div>
  );
}