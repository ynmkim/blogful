// 서버 기능 만들기
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) { 
  if (request.method == 'POST') {
    let changePost = {
      title: request.body.title,
      content: request.body.content
    }
    
    const db = (await connectDB).db("blogful")
    let post = await db.collection('post').updateOne(
      { _id : new ObjectId(request.body._id.toString()) },
      { $set: changePost }
    )
    return response.redirect(302, '/list')
  }
}