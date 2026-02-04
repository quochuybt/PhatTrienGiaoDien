import React,{ useMemo, useState } from 'react'

function UseMemo() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5]);

  //Tối ưu hiệu suất bằng cách ghi nhớ giá trị tính toán. Nếu giá trị total không thay đổi, hàm tính toán sẽ không được gọi lại.
  const total = useMemo(() => {
    console.log("Đang tính toán...");
    return numbers.reduce((sum, n) => sum + n, 0);
  }, [numbers]);

  return (
    <div>
      <h2>Tổng: {total}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click: {count}
      </button>
    </div>
  );
}

export default UseMemo