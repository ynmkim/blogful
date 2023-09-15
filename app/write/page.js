export default function Write() {
  let day = ['일', '월', '화', '수', '목', '금', '토'];
  let today = new Date();
  let dateFormat = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일 ';
  // console.log(dateFormat)

  return (
     <div className="container">
       <div className='heading'>
           <h4 className="title">글쓰기</h4>
      </div>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용" />
        <input style={{ display: 'none' }} name="date" defaultValue={dateFormat}/>
        <button type="submit">발행</button>
      </form>
     </div>
  )
}