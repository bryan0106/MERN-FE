import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Themeprovider } from './context'

import Routing from './routing'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
<Themeprovider>
<Routing/>
</Themeprovider>
  </BrowserRouter>
  </StrictMode>,
)
