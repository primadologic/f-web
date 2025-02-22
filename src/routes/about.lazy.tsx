import { createLazyFileRoute } from '@tanstack/react-router'
import AboutMainComponent from '../features/public/about/main'

export const Route = createLazyFileRoute('/about')({
  component: AboutMainComponent,
})

