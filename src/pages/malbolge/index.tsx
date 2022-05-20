import { Header } from 'layout/main'
import { MainLayout } from 'layout'
import React from 'react'

/**
 * where the worst code ever written resides
 *
 */
export default function Malbolge() {
  return (
    <MainLayout classname={'bg-backgroundColor-darkGray'}>
      <Header goal />
    </MainLayout>
  )
}
