import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayaout } from '../components/layouts/MainLayaout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <MainLayaout >
            <div >
                <p>
                    Get started by editing&nbsp;
                    <code >pages/index.js</code>
                </p>
                <div>
                    <Link href="/">Home</Link>
                </div>
            </div>
        </MainLayaout>
    )
}
