import { Inter } from '@next/font/google'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayaout } from '../components/layouts/MainLayaout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <div>
                <p>
                    Get started by editing&nbsp;
                    <code>pages/index.js</code>
                </p>
                <div>
                    <Link href="/">Home</Link>
                </div>
            </div>
        </>
    )
}

About.getLayout = function getLayout(page: JSX.Element[]) {
    return (
        <MainLayaout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayaout>
    )
}
