import { Outlet, useLocation, } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeProvider"
const App = () => {
  const { pathname } = useLocation()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {pathname !== '/' && <Header />}
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default App