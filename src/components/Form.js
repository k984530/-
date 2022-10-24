import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>이름</label>
            <input type='text'></input>
            <label>연락처 (이메일 또는 전화번호)</label>
            <input type='text'></input>
            <label>주제</label>
            <input type='text'></input>
            <label>문의 내용</label>
            <textarea rows='6' placeholder='문의하실 내용을 적어주십시오' />
            <button className='btn'>보내기</button>
        </form>
    </div>
  )
}

export default Form