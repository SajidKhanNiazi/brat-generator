import { redirect } from 'next/navigation'

// Redirect /brat-generator to home page where the tool now lives
export default function BratGeneratorPage() {
  redirect('/')
}
