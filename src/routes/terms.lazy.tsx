import TermsMainComponent from '@/features/public/terms/main'
import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/terms')({
  component: TermsMainComponent,
})

