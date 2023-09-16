export default function Write() {
  let day = ['일', '월', '화', '수', '목', '금', '토'];
  let today = new Date();
  let dateFormat = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일 ' + today.getHours() + '시 ' + today.getMinutes() + '분 ';
  // console.log(dateFormat)

  return (
     <div className="container">
       <div className='heading'>
           <h4 className="title">글 작성하기</h4>
      </div>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목을 입력해주세요" />
        <input name="writer" placeholder="작성자 이름을 입력해주세요"/> 
        <textarea name="content" placeholder="본문을 입력해주세요" />
        <input style={{ display: 'none' }} name="date" defaultValue={dateFormat}/>
        <button type="submit">발행</button>
      </form>
     </div>
  )
}