import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Router/Router'
import theme from './theme/theme'

function App() {
  

  return (
   <div className='App'>
   <ThemeProvider theme={theme}>
    
    <CssBaseline/>
    <RouterProvider router={router}/>

   </ThemeProvider>
   </div>
  )
}

export default App
