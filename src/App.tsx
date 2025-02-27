import { Toaster } from 'sonner';
import HomeMainComponent from '@/features/home/homeComponent';


function App() {
  

  return (
    
   
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
  )
}

export default App
