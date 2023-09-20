import moment from 'moment';
import 'moment/locale/ko';

export default function Write() {
  // 모바일 ios 에서 시간 차이 이슈가 있음
  // let today = new Date();
  // let dateFormat = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일 ' + today.getHours() + '시 ' + today.getMinutes() + '분 ';
  
  // let date = moment().format('LLL'); 

  const offset = 1000 * 60 * 60 * 9
  const koreaNow = new Date((new Date()).getTime() + offset)
  const date = koreaNow.toISOString().replace("T", " ").split('.')[0]

  return (
     <div className="container">
       <div className='heading'>
           <h4 className="title">글 작성하기</h4>
      </div>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목을 입력해주세요" />
        <input name="writer" placeholder="작성자 이름을 입력해주세요"/> 
        <textarea name="content" placeholder="본문을 입력해주세요" />
        <input style={{ display: 'none' }} name="date" defaultValue={date}/>
        <button type="submit">발행</button>
      </form>
     </div>
  )
}