import React from 'react'
import { 
  Route, 
  BrowserRouter, 
  Navigate,
  Routes 
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/PageNotFound'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate replace to='homepage' />} />
          <Route path='homepage' element={<HomePage />}/>
          <Route path='sign-up' element={<SignUp />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='about' element={<About />}/>
          <Route path='categories' element={<Categories />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='products' element={<Products />}/>
          <Route path='login' element={<Login />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Route>
      
      </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
