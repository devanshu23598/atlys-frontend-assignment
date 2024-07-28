import React, { useState } from 'react'
import Login from '../Login';
import Signup from '../Signup';

function LoginSignup({isModal = false, hide = ()=>{}}) {
    const [isLogin, setIsLogin] = useState(!isModal);
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        {
            isLogin ?
            <Login isModal={isModal} hide={hide} onClick={setIsLogin} />
            :
            <Signup isModal={isModal} hide={hide} onClick={setIsLogin} />
        }
    </div>
  )
}

export default LoginSignup