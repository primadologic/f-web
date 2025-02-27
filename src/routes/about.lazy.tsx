import AboutMainComponent from '@/features/public/about/main'
import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/about')({
  component: AboutMainComponent,
})

