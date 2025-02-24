import { createLazyFileRoute } from '@tanstack/react-router'
import ContactMainComponent from '../features/public/contact/main'

export const Route = createLazyFileRoute('/contact')({
  component: ContactMainComponent,
})

