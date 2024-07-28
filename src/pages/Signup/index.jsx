import React, { useCallback } from 'react';
import LabelInput from '../../components/elements/LabelInput';
import { useNavigate } from 'react-router-dom';

function Signup({onClick=()=>{}, hide=()=>{}, isModal=  false}) {
    const navigate = useNavigate();
    const clickHandler = useCallback(()=>{
        if(isModal){
            hide();
        } else{
            navigate('/comments');
        }
    },[isModal, hide, navigate])
  return (
    <>
        <div className='border-2 [border-image:linear-gradient(to_bottom_right,#969696,#343434)_30] bg-regal-black rounded-lg flex px-6 flex-col rounded border-grey min-w-[463px] py-10 relative'>
            {
                isModal ?
                <div className='w-8 h-8 bg-black rounded-full text-white flex items-center justify-center absolute right-3 top-3' onClick={hide}>
                    <img src='./cross.png' className='w-4 h-4' alt='cross icon'/>
                </div>
                :
                null
            }
            <p className='text-greyish text-sm font-medium text-center'>SIGN UP</p>
            <p className='text-white text-lg font-semi text-center mb-11'>Create an account to continue</p>
            <LabelInput 
                type="email"
                placeholder='Enter your email or username' 
                labelText='email'
            />
            <LabelInput 
                type="text"
                placeholder='Choose a preferred username' 
                labelText='Username'
                name='username'
            />
            <LabelInput 
                type='text'
                placeholder='Enter your password'
                additionalLabel='Forgot password?'
                labelText='password'
                name='password'
             />
            <button className='rounded text-white bg-bluish text-center text-base font-medium py-2.5 mb-2' onClick={clickHandler}>
                Continue
            </button>
            <p className='text-greyish text-sm text-left font-medium'>
                Already have an account? 
                <span className='text-white pl-1 cursor-pointer' onClick={()=>{onClick(true)}}>Login →</span>
            </p>
        </div>
    </>
  )
}

export default Signup;