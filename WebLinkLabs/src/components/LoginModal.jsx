import loginImg from "../assets/login_food_panel.png";
import "./LoginModal.css";

export default function LoginModal({ onClose, onContinue }) {
  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-container" onClick={(e) => e.stopPropagation()}>

        {/* ── LEFT: food image panel ── */}
        <div className="lm-panel">
          <img src={loginImg} alt="Delicious food" className="lm-panel__img" />
          {/* Gradient overlay on image */}
          <div className="lm-panel__gradient" />
          {/* Quote text */}
          <p className="lm-panel__quote">
            "Embrace the art of cooking, where flavors come alive!"
          </p>
        </div>

        {/* ── RIGHT: login form ── */}
        <div className="lm-form-wrap">
          {/* Close button */}
          <button className="lm-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="#9095A0" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="lm-title">Login</h2>
          <p className="lm-subtitle">Enter your email to log in.</p>

          {/* Email input */}
          <input
            type="email"
            className="lm-input"
            placeholder="Enter your email"
            id="login-email"
          />

          {/* Continue button */}
          <button className="lm-btn-continue" onClick={onContinue}>Continue</button>

          {/* Divider */}
          <div className="lm-divider">
            <span className="lm-divider__line" />
            <span className="lm-divider__text">OR</span>
            <span className="lm-divider__line" />
          </div>

          {/* Terms */}
          <p className="lm-terms">
            By continuing, you agree to the updated{" "}
            <a href="#">Terms of Sale</a>,{" "}
            <a href="#">Terms of Service</a>, and{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          {/* Social login buttons */}
          <div className="lm-socials">
            {/* Google */}
            <button className="lm-social-btn" id="login-google">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Facebook */}
            <button className="lm-social-btn" id="login-facebook">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M18 9a9 9 0 10-10.406 8.894V11.62H5.309V9h2.285V7.013c0-2.255 1.343-3.502 3.4-3.502.985 0 2.015.175 2.015.175v2.215h-1.135c-1.119 0-1.467.694-1.467 1.406V9h2.496l-.399 2.62h-2.097v6.274A9.003 9.003 0 0018 9z" fill="#1877F2"/>
              </svg>
              Continue with Facebook
            </button>

            {/* Apple */}
            <button className="lm-social-btn" id="login-apple">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14.94 9.57c-.017-1.71.776-3 2.382-3.953-.92-1.31-2.3-2.034-4.115-2.173-1.726-.135-3.61 1.01-4.3 1.01-.728 0-2.418-.968-3.734-.968C2.77 3.533 0 5.594 0 9.784c0 1.27.233 2.58.698 3.93.624 1.78 2.875 6.15 5.22 6.08 1.237-.03 2.113-.878 3.728-.878 1.564 0 2.374.878 3.742.878 2.368-.035 4.41-4.016 5.004-5.8C15.73 12.754 14.94 11.31 14.94 9.57zM11.64 2.41C12.928.912 12.82-.02 12.79 0c-1.12.065-2.43.75-3.163 1.615-.796.932-.85 1.987-.826 2.22 1.213.09 2.44-.582 3.84-1.424z" fill="#000"/>
              </svg>
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
