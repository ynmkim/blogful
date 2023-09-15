import Link from 'next/link';
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Content(props) {

  const db = (await connectDB).db('blogful')
  let post = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
  // console.log(props.params.id)

  return (
    <div className="container">
      <h4 className="post-title">{post.title}</h4>
      <div className="flex-row">
        <div className="write-info">
          <span className="writer">Write by {post.writer}</span>
          <span className="date">{post.date}</span>
        </div>
        <Link href={'/edit/' + post._id.toString()}>수정</Link>
        <Link href={'/edit/' + post._id.toString()}>삭제</Link>
      </div>
      <p class="post-content">{post.content}</p>
    </div>
  )
}

