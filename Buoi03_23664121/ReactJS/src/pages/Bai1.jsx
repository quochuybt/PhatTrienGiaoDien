import React from 'react'
import Header from '../components/Header'
import StudentInfo from '../components/StudentInfo'
import Footer from '../components/Footer'
function Bai1() {
  return (
    <div> <Header/>
      <StudentInfo 
        fullName="Lê Nguyễn Quốc Huy"
        studentId="23664121"
        className="DHKTPM19ATT"
      ></StudentInfo>
      <Footer/></div>
  )
}

export default Bai1