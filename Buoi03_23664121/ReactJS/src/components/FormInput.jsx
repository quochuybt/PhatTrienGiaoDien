import React ,{useState} from 'react'
import './FormInput.css'

function FormInput() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    }
  return (
    <div className='form-container'>
        <h2>Form Nhập thông tin</h2>
        <div className='input-group'>
            <label>Họ và tên: </label>
            <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Nhập tên của bạn ...'
            />
        </div>
        <div className='input-group'>
            <label>Email: </label>
            <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Nhập email của bạn ...'
            />
        </div>
        <hr />
        <div className='display-area'>
            <h3>Kết quả hiển thị:</h3>
            <p>Họ và tên: {formData.name || "..."}</p>
            <p>Email: {formData.email || "..."}</p>
        </div>
    </div>
  )
}

export default FormInput