import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import BannerLayout from "./layouts/BannerLayouts"

// PENTING
// Jika clone projek ini, "npm install react react-dom" terlebih dahulu sebelum menjalankan aplikasi ini

const router = createBrowserRouter([
  {
    path: "/",
    element: <BannerLayout />,
    errorElement: <div>The URL doesn't exist. Please check it again.</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ],
  },
   // BannerLayout tidak bisa diterapkan pada route ini
  {
    path: 'login',
    element: <Login />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
