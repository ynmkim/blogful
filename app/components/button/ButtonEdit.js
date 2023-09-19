'use client'
import Link from "next/link";

export default function ButtonEdit(props) {
  // 방법 2 : 검색 노출이 어려움
  // useEffect(() => { 
  //   // 서버에 부탁해서 DB 게시물 가져옴
  //   // result = DB 게시물

  // }, [])
  return (
    <div className='button-group'>
      <Link className="button-edit" href={'/edit/' + props.post._id.toString()}>
        <i className="icon-edit" aria-label="수정"><img src="/icon_edit.png" /></i>
      </Link>
      <button type="button" className="button-delete" onClick={() => {
        fetch('/api/post/delete', // url로 GET 요청
          {
            method: 'DELETE',
            body: props.post._id.toString()
          }
        )
        .then((response) => {
          if (response.status == "200") { 
            return response.json()
          } else {
            // Ajax 에러처리 : 서버가 에러코드 전송시 실행할 코드 : 서버가 status(500) 같은거 보낼 때
          }
        })
        .then(() => {
          window.location.href = '/list'; // 성공시 실행할 코드
        }).catch(() => { 
          console.log(error) // 인터넷 문제로 실패시(네트워크 에러) 실행할 코드 
        })
      }}>
        <i className="icon-delete" aria-label="삭제">
          <img src="/icon_delete.png" />
        </i>
      </button>
    </div>   
  )
}

 