import { Toaster } from 'sonner';
import HomeMainComponent from '@/features/home/homeComponent';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  
  const helmetContext = {};

  return (
    
   <HelmetProvider context={helmetContext}>
      <div className="">
        <Toaster
            closeButton={true}
            position="top-center"
            duration={3500} 
            toastOptions={{
              style: {fontSize: '14px'}
          }}
        />
        <HomeMainComponent />
      </div>
    </HelmetProvider>
  )
}

export default App
