import Link from "next/link";
import { connectDB } from "@/util/database"
export const dynamic = 'force-dynamic' 

export default async function List() {
  const db = (await connectDB).db("blogful")
  let post = await db.collection('post').find().toArray()
  let postReverse = post.reverse() // 최신순 정렬로 바꾸기
  // console.log(postReverse)
  // console.log(post[0].title)

  return (
    <div className="container">
      <div className='heading'>
        <h4 className="title">마이 블로그</h4>
        <p className="desc">블로그 소개글</p>
      </div>
      <ul className="post-list">
        {
          postReverse.map((key, i) => { 
            return (
             <li className="post-item" key="{i}">
                <Link href={'/content/' + postReverse[i]._id}>
                <h4 className="post-title">{postReverse[i].title}</h4>
                <p className="post-subtitle">{postReverse[i].subtitle}</p>
                <div className="write-info">
                  <span className="writer">Write by {postReverse[i].writer}</span>
                  <span className="date">{postReverse[i].date}</span>
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