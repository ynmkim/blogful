import Link from "next/link";
import { connectDB } from "@/util/database"
import ContentLink from "./ContentLink"

export default async function List() {
  let category = ['Culture', 'Essay', 'Pepple', 'Library']

  const db = (await connectDB).db("blogful")
  let post = await db.collection('post').find().toArray();
  // console.log(post[0].title)

  return (
    <div className="container">
      <div className='heading'>
        <h4 className="title">마이 블로그</h4>
        <p className="desc">블로그 소개글</p>
      </div>
      <ul className="post-list">
        {
          post.map((key, i) => { 
            return (
             <li className="post-item" key="{i}">
                <Link href={'/content/' + post[i]._id}>
                <h4 className="post-title">{post[i].title}</h4>
                <p className="post-subtitle">{post[i].subtitle}</p>
                <div className="write-info">
                  <span className="writer">Write by {post[i].writer}</span>
                  <span className="date">{post[i].date}</span>
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