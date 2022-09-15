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
        {/* PostOwner Example
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/handsome.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">Chayanin Suatap 12345678</span>
          </div>
          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0" />
        </div> */}
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
        {/* <Comment
          username={comments[0].username}
          userImagePath={comments[0].userImagePath}
          commentText={comments[0].commentText}
          likeNum={comments[0].likeNum}
          replies={comments[0].replies}
        />
        <Comment
          username={comments[1].username}
          userImagePath={comments[1].userImagePath}
          commentText={comments[1].commentText}
          likeNum={comments[1].likeNum}
          replies={comments[1].replies}
        /> */}
        {/* Comment Example */}
        {/* <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div> */}

        {/* Reply Example
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
