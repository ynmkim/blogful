import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {

  const db = (await connectDB).db('blogful')
  let post = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

  return (
     <div className="container">
       <div className='heading'>
           <h4 className="title">수정하기</h4>
      </div>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={post.title} />
        <textarea name="content" defaultValue={post.content} />
        <input style={{display: 'none'}} name="_id" defaultValue={post._id.toString()}/>
        <button type="submit">발행</button>
      </form>
     </div>
  )
}