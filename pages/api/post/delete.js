// 서버는 요청 받으며 DB 글 삭제
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) { 
  if (request.method == 'DELETE') {
    // console.log(request.body)
    
    const db = (await connectDB).db("blogful")
    let post = await db.collection('post').deleteOne({ _id: new ObjectId(request.body) })
    // 서버에 정보가 없으면 1)DB를 조회하거나, 2)유저에서 보내달라고 한다.
    response.status(200).json("삭제완료")
  }
}