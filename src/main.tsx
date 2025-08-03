import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ToastContainer} from 'react-toastify';
import { BadgeCheck, CircleAlert, Info, TriangleAlert } from 'lucide-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        icon={({ type }) => {
          // theme is not used in this example but you could
          switch (type) {
            case 'info':
              return <Info className="stroke-indigo-400" />;
            case 'error':
              return <CircleAlert className="stroke-red-500" />;
            case 'success':
              return <BadgeCheck className="stroke-green-500" />;
            case 'warning':
              return <TriangleAlert className="stroke-yellow-500" />;
            default:
              return null;
          }
        }}
      />
      <RouterProvider router={router} />,
    </Provider>

  </StrictMode>,
)
