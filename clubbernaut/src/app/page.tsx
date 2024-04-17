'use client'

import {Hero} from '@/components/Hero/Hero'
import { UserContext,UserInfo } from '@/controllers/UserInfo'

export default function Homepage() {
  return (
    <UserInfo>
    <Hero />
    </UserInfo>
  )
}