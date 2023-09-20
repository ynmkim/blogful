// 서버 기능 만들기
import { connectDB } from "@/util/database"

export default async function handler(request, response) { 

  if (request.method == 'POST') {
    // console.log(request.body) 
    // return response.status(200).json('발행 완료')
    if (request.body.title == '') {
      return response.status(500).json('제목을 입력하세요.')
    } 
    if (request.body.content == '') {
      request.body.content = request.body.content.replaceAll("<br>", "\r\n")
      return response.status(500).json('내용을 입력하세요.')
    } 
    
    const db = (await connectDB).db("blogful")
    let post = await db.collection('post').insertOne(request.body)
    return response.redirect(302, '/list')
  }
}