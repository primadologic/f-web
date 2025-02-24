import { createLazyFileRoute } from '@tanstack/react-router'
import TermsMainComponent from '../features/public/terms/main'

export const Route = createLazyFileRoute('/terms')({
  component: TermsMainComponent,
})

