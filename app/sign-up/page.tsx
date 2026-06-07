import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { AuthForm } from '@/components/auth-form'

export const metadata = {
  title: 'Sign Up - Bedazzled Mart',
  description: 'Create a new Bedazzled Mart account',
}

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  
  if (session?.user) {
    redirect('/')
  }

  return <AuthForm mode="sign-up" />
}

