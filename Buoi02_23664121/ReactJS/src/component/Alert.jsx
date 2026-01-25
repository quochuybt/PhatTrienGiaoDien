import React, {useState} from 'react'
import Button from './Button'
import './Alert.css'
function Alert() {
  const [alertType, setAlertType] = useState("");
  const handleColorChange = (type) => {
    setAlertType(type);
  };
  return (
    <div className="alert-container">
      <h1 className={alertType}>This is an alert</h1>
    <div className='btn-group'>
      <Button type="success" onClick={() => handleColorChange("success")}>Success</Button>
      <Button type="warning" onClick={() => handleColorChange("warning")}>Warning</Button>
      <Button type="error" onClick={() => handleColorChange("error")}>Error</Button>
    </div>
    </div>
  )
}

export default Alert