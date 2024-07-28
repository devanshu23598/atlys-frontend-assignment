import React from 'react';
import Input from '../../components/elements/Input';
import { data } from './data';
import CommentSnippet from '../../components/elements/Comment';
import useModal from '../../components/elements/Modal';
import LoginSignup from '../LoginSignup';

function Comments() {
    const {setIsOpen, RenderModal} = useModal();
  return (
    <div className='flex flex-col py-10 w-11/12 text-left lg:w-6/12 mx-auto font-medium'>
        <p className='text-[28px] text-greyish-100 '>Hello Jane</p>
        <p className='text-placeholder-color text-base max-w-[580px] mb-8'>How are you doing today? Would you like to share something with the community 🤗</p>
        <div className='border-2 border-input-br-color px-5 rounded-lg py-4 bg-regal-black mb-4' onClick={()=>{setIsOpen(true)}}>
            <p className='text-lg text-greyish-100 mb-3'>Create Post</p>
            <div className='bg-regal-black-dark rounded p-4 flex gap-4 mb-3'>
                <div className='w-12 h-12 rounded-full bg-regal-black flex justify-center items-center'>💬</div>
                <Input 
                    className='text-base focus:outline-none border-0 w-full text-base font-normal text-placeholder-color bg-transparent'
                    type={'text'}
                    id={'comment'}
                    name={'comment'}
                    placeholder={'How are you feeling today?'}
                />
            </div>
            <button className='rounded float-right text-white bg-bluish text-center text-base font-medium px-[38px] py-3 mb-2'>
                Post
            </button>
        </div>
        {
            data.map((comment)=>{
                return(
                    <CommentSnippet 
                        {...comment}
                        key={comment.timestamp}
                        setIsOpen={setIsOpen}
                    />
                )
            })
        }
        <RenderModal>
            <LoginSignup 
                isModal
                hide={()=>setIsOpen(false)}

            />
        </RenderModal>
    </div>
  )
}

export default Comments;