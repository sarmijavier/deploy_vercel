import Link from 'next/link'
import { MainLayaout } from '../../components/layouts/MainLayaout'


export default function Pricing() {
    return (
        <>
            <div>
                <p>
                   Pricing&nbsp;
                    <code>pages/index.js</code>
                </p>
                <div>
                    <Link href="/">Home</Link>
                </div>
            </div>
        </>
    )
}

Pricing.getLayout = function getLayout(page: JSX.Element[]) {
    return (
        <MainLayaout>
            {page}
        </MainLayaout>
    )
}
