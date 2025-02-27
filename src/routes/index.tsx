import HomeMainComponent from '@/features/home/main'
import { createFileRoute } from '@tanstack/react-router'




export const Route = createFileRoute('/')({
  component: HomeMainComponent
})

