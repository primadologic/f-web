import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/terms')({
  component: TermsRoute,
})

function TermsRoute() {
  return <div className="text-2xl font-medium">Hello "/terms"!</div>
}
