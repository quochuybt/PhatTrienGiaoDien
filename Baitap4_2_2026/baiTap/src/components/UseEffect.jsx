import React,{ useState, useEffect } from 'react'

function UseEffect() {
    const [seconds, setSeconds] = useState(0);
    //Giúp thực thi code tại các thời điểm nhất định trong vòng đời của component.
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // [] có nghĩa là chỉ chạy 1 lần khi mount

  return <p>Đã trôi qua: {seconds} giây</p>;
}

export default UseEffect