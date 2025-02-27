import FaqsMainComponent from '@/features/public/faqs/main'
import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/faqs')({
  component: FaqsMainComponent,
})

