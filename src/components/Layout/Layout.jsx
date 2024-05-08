import { Suspense } from 'react'
import AppBar from '../AppBar/AppBar'
import Loader from '../Loader/Loader'


const Layout = ({ children }) => {
    return (
    <>
        <AppBar />
            <Suspense fallback={<Loader />}>
          <main> {children} </main>
        </Suspense>
        </>
    
    
  )
}

export default Layout