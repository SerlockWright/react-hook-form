import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

const Navigation = () => {
    return (
        <div className="border-b bg-slate-100">
            <nav className="container flex justify-between items-center">
                <div className="font-semibold">React Hook Forms</div>
                <div className="flex items-center gap-4 text-lg">
                    <a href="https://github.com/Yazdun/react-fcc-forms">
                        <BsGithub />
                    </a>
                    <a href="https://twitter.com/Yazdun">
                        <BsTwitter />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
