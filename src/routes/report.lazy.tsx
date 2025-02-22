import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/report')({
  component: ReportRoute,
})

function ReportRoute() {
  return <div className="text-2xl font-medium">Hello "/report"!</div>
}
