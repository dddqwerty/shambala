import { Member } from 'components/cards/AnimatedCard'
import { MainLayout } from 'layout'
import React from 'react'

/**
 * where the worst code ever written resides
 *
 */
export default function Malbolge() {
  return (
    <MainLayout classname={'bg-backgroundColor-darkGray'}>
      <div className="h-[200px] w-[500px] bg-primary-yellow" />
      <Member />
    </MainLayout>
  )
}
