import ContactMainComponent from '@/features/public/contact/main'
import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/contact')({
  component: ContactMainComponent,
})

