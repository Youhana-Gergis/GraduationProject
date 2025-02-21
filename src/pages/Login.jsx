import React from 'react'
import background from '../assets/background.jpg';
import onbackground from '../assets/onbackground.png';
import '../styles/login.css';
const Login = () => {
  return (
    <>
      <div className="bg-image"><img src={background} alt=''style={{height:"100vh" , width:"100%"}} /></div>

      <div className="bg-text flex justify-around">
        <div className='logo-image'>
          <img src={onbackground} alt='' />
        </div>

        <div className='inputs'>
          <h1>صفحة تسجيل الدخول</h1>
          <form>
            <div className='input'>
              <label>البريد الالكتروني</label>
              <input type="text" placeholder='قم بادخال البريد الالكتروني'/>
            </div>
            <div className='input'>
              <label>كلمة المرور</label>
              <input type="text" placeholder='قم بادخال كلمة المرور'/>
            </div>
          </form>
          <div className="footer pt-10">
              <button>تسجيل دخول</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login