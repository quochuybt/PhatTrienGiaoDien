import React,{useState} from 'react'
function UseState() {
    const [count, setCount] = useState(0);
    //count lưu giá trị hiện tại, setCount là hàm để cập nhật giá trị đó.
  return (
    <div>
        <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm vào đây</button>
    </div>
  )
}

export default UseState