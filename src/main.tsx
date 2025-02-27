import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { routeTree } from './routeTree.gen'
import "./index.css"
import './App.css'
import 'react-phone-number-input/style.css'
import { Toaster } from 'sonner'
import NotifyMeAlertDialog from './components/dialogs/notifyMeDialog'

const queryClient = new QueryClient()

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        richColors
        closeButton={true}
        position="top-center"
        duration={3500} 
        toastOptions={{
          style: {fontSize: '14px'}
        }}
      />
      <>
        <NotifyMeAlertDialog />
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  )
}
