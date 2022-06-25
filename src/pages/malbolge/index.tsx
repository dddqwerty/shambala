import { MainLayout } from 'layout'
import React from 'react'
import Home from 'pages/whoarewe'

/**
 * where the worst code ever written resides
 *
 */
export default function Malbolge() {
  return (
    <MainLayout classname={'bg-backgroundColor-darkGray'}>
      <Home />
    </MainLayout>
  )
}
