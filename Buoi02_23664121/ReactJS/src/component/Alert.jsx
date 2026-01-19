import React, { useState } from 'react'
import './Alert.css'

function Alert() {
  const [alertType, setAlertType] = useState(null)

  const handleSuccess = () => setAlertType('success')
  const handleWarning = () => setAlertType('warning')
  const handleError = () => setAlertType('error')

  return (
    <div className="alert-container">
      <div className="button-group">
        <button className="btn-success" onClick={handleSuccess}>Success</button>
        <button className="btn-warning" onClick={handleWarning}>Warning</button>
        <button className="btn-error" onClick={handleError}>Error</button>
      </div>

      {alertType && (
        <div className={`alert alert-${alertType}`}>
          {alertType === 'success' && '✓ Thành công!'}
          {alertType === 'warning' && '⚠ Cảnh báo!'}
          {alertType === 'error' && '✗ Lỗi!'}
        </div>
      )}
    </div>
  )
}

export default Alert