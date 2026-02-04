import React,{ useState, useCallback , memo} from 'react'
//memo giúp component này chỉ render lại khi 'count' hoặc 'increment' thực sự thay đổi
const Child = memo(({ increment, count }) => {
  console.log("Child render");
  return (
    <div>
      <h2>Số hiện tại: {count}</h2>
      <button onClick={increment}>Tăng số</button>
    </div>
  );
});
function UseCallBack() {
  const [count, setCount] = useState(0);
  //Giữ nguyên tham chiếu hàm giữa các lần render, tránh việc tạo lại hàm không cần thiết.
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Demo useCallback</h1>
      <Child increment={handleIncrement} count={count} />
    </div>
  );
}

export default UseCallBack