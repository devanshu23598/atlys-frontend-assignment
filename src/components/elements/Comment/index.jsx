import React from 'react'
import relativeDateText from '../../../utils/timeDiff'

function CommentSnippet({photoUrl, author, icon, description, timestamp, isEdited, replyCount, setIsOpen}) {
  return (
    <>
    <div className='border-2 border-input-br-color px-5 rounded-lg py-4 bg-regal-black mb-4' onClick={()=>setIsOpen(true)}>
        <div className='flex justify-between items-center mb-4'>
            <div className='flex gap-4'>
                <img src={photoUrl} alt={author} width={48} height={48} className='rounded-full' />
                <div>
                    <div className='text-greyish-100  text-base'>{author}</div>
                    <div className='text-sm text-placeholder-color flex gap-2'>
                        {relativeDateText(timestamp)}
                        {
                            isEdited ?
                            <span className='flex items-center'>
                                <span className='w-[3px] h-[3px] bg-greyish-100 rounded mr-1 inline' />
                                Edited
                            </span>
                            :
                            null
                        }    
                    </div>
                </div>
            </div>
            <div className='flex gap-1'>
                <span className='w-[3px] h-[3px] bg-white rounded'></span>
                <span className='w-[3px] h-[3px] bg-white rounded'></span>
                <span className='w-[3px] h-[3px] bg-white rounded'></span>
            </div>
        </div>
        <div className='bg-regal-black-dark rounded p-4 flex gap-4 mb-4'>
            <div className='w-12 h-12 rounded-full bg-regal-black flex justify-center items-center'>{icon}</div>
            <p className='text-base focus:outline-none border-0 w-full text-base font-normal text-placeholder-color bg-transparent'>
                {description}
            </p>
        </div>
        {
            replyCount > 0 ?
            <div className='flex items-center gap-2'>
                <img src='./comments.png' alt='comment icon' className='w-5 h-5' />
                <span className='text-greyish text-md font-medium'>
                    {replyCount}
                    {
                        replyCount > 1 ? ' Comments' : ' Comment'
                    }
                </span>
            </div>
            :
            null
        }
        
    </div>
    </>
  )
}

export default CommentSnippet