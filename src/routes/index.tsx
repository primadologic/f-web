import { createFileRoute } from '@tanstack/react-router'
import HomeMainComponent from '../features/home/main'



export const Route = createFileRoute('/')({
  component: HomeMainComponent
})

