import { createLazyFileRoute } from '@tanstack/react-router'
import FaqsMainComponent from '../features/public/faqs/main'

export const Route = createLazyFileRoute('/faqs')({
  component: FaqsMainComponent,
})

