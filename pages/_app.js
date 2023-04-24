import '@/styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav id='school'>
        <Link href="/" className='link'>
          Home
        </Link>{' '}
        <Link href="/about" className='link'>
          About
        </Link>{' '}
        <Link href="/useSignUpForm" className='link'>
          Sign Up
        </Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
export default MyApp;