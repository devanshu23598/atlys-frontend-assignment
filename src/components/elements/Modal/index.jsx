import React, { useRef, useState } from 'react'

function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();
    const RenderModal = ({children})=>{
    return (
        <div id="modalBackdrop" className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm  items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className='relative' ref={modalRef}>
                {children}
            </div> 
        </div>
    )
    }
    return{
        setIsOpen,
        RenderModal
    }
}

export default useModal;