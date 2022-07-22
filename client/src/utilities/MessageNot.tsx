import { useEffect, useState } from 'react'

type MSG = {
    message: string[]
}

export default function MessageNot({ message }: MSG) {

    const [visible, setIsvisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setIsvisible(false)
            return;
        } else {
            setIsvisible(true);
            const timer = setTimeout(() => {
                setIsvisible(false)
            }, 5000)
            return () => clearTimeout(timer);
        }

    }, [message])

    return (
        <>
            {visible ? <h5 className='text-danger '>{message}</h5> : null}
        </>
    )
}