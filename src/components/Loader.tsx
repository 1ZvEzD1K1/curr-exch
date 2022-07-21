import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap'

const Loader: FC = () => {
  return (
    <>
    <Spinner animation="border" variant="dark" />
    </>
  )
}

export default Loader