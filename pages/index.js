import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          username="Charttrakarn Choosiri 620610784"
          userImagePath="/profileImages/pepe.jpg"
          commentText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum={100}
        />
        {comments.map((comment, i) => (
          <Comment
            key={i}
            username={comments[i].username}
            userImagePath={comments[i].userImagePath}
            commentText={comments[i].commentText}
            likeNum={comments[i].likeNum}
            replies={comments[i].replies}
          />
        ))}
      </div>
    </div>
  );
}
