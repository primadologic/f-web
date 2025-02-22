import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/faqs')({
  component: FaqsRoute,
})

function FaqsRoute() {
  return <div className="text-2xl font-medium">Hello "/faqs"!</div>
}
