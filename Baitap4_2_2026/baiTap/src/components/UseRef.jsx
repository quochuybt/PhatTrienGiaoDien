import React,{ useRef } from 'react'

function UseRef() {
    const inputRef = useRef(null);
    const handleClick = () => {
    inputRef.current.focus(); // Tập trung con trỏ vào ô nhập
    //inputRef.current giữ tham chiếu đến thẻ input thật trên trình duyệt.
    };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus vào ô nhập</button>
    </>
  );
}

export default UseRef