import React, { useEffect, useState } from 'react'

type MSG = {
    message: string
    msg: string
}

export default function MessageNot({ message, msg }: MSG) {

    const [visible, setIsvisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setIsvisible(false)
            return;
        }
        setIsvisible(true);
        const timer = setTimeout(() => {
            setIsvisible(false)
        }, 5000)
        return () => clearTimeout(timer);
    }, [msg.length])

    return (
        <>
            {visible ? <h5 className='text-danger '>{message}</h5> : null}
        </>
    )
}