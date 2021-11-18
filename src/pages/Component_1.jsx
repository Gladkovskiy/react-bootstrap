import React from 'react'
import CaruselExample from '../components/CaruselExample'
import DropdownExample from '../components/DropdownExample'
import FigureExample from '../components/FigureExample'
import ImageExample from '../components/ImageExample'
import ListItemExample from '../components/ListItemExample'
import {Container} from 'react-bootstrap'

const Component_1 = () => {
  return (
    <Container>
      <CaruselExample />
      <DropdownExample />
      <FigureExample />
      <ImageExample />
      <ListItemExample />
    </Container>
  )
}

export default Component_1
