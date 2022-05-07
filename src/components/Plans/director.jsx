import React from 'react'
import { handleIcon } from 'utils'
import { Start, Mid, End } from './mol'

export const Dir = (props) => {
  const { headText, bodyText, date, index, selected, l = false, icon } = props

  switch (index) {
    case 'first':
      return <Start headText={headText} bodyText={bodyText} date={date} icon={icon} l={l} />

    case 'middle':
      return <Mid headText={headText} bodyText={bodyText} date={date} icon={icon} l={l} />

    case 'end':
      return <End headText={headText} bodyText={bodyText} date={date} icon={icon} l={l} />
  }
}

export default Dir
