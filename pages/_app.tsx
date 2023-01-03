import '../styles/globals.css'
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactNode } from 'react';

type NextPageWithLayaout = NextPage & {
  getLayout?: ( page: JSX.Element ) => ReactNode
}

type AppPropsWithLayaout = AppProps & {
  Component: NextPageWithLayaout
}

export default function App({ Component, pageProps } : AppPropsWithLayaout) {

  const getLayout = Component.getLayout || ((page) => page)
  //return <Component {...pageProps} />
  return getLayout( <Component {...pageProps}/> )
}
