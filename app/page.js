
import { connectDB } from "@/util/database"
import { MongoClient, ObjectId } from "mongodb"
import Link from 'next/link';
// export const revalidate = 60;

export default async function Home(props) {

  const db = (await connectDB).db("blogful")
  let post = await db.collection('post').find().toArray()
  let postReverse = post.reverse()
  // 마지막 배열에서부터 N개 가져와서 새로운 배열에 담는다.
  // map 함수로 키값 데이터 바인딩 한다.
  // 최신순으로 배열을 재정렬한다.
  let postLatest = postReverse.slice(0, 3);
  // await fetch('url', {cache : 'force-cache'})

  return (
    <div className="container">
      <div className='heading'>
        <h4 className="title">새로 올라온 글</h4>
      </div>
      <ul className="post-list">
        {
          postLatest.map((key, i) => { 
            return (
             <li className="post-item" key="{i}">
                <Link href={'/content/' + postLatest[i]._id}>
                <h4 className="post-title">{postLatest[i].title}</h4>
                <p className="post-subtitle">{postLatest[i].subtitle}</p>
                <div className="write-info">
                  <span className="writer">Write by {postLatest[i].writer}</span>
                  <span className="date">{postLatest[i].date}</span>
                </div>
              </Link>
            </li>
          )
        })
        }
      </ul>
    </div>

  )
}