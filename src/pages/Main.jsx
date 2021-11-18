import React from 'react'
import {Container} from 'react-bootstrap'

import AccordionExample from '../components/AccordionExample'
import BadgeExample from '../components/BadgeExample'
import BreadcrumbsExample from '../components/BreadcrumbsExample'
import ButtonExample from '../components/ButtonExample'
import CardExample from '../components/CardExample'
import PlaceholderExaple from '../components/PlaceholderExaple'

const Main = () => {
  return (
    <Container>
      <AccordionExample />
      <BadgeExample />
      <BreadcrumbsExample />
      <ButtonExample />
      <CardExample />
      <PlaceholderExaple />
    </Container>
  )
}

export default Main
