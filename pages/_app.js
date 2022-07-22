import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
