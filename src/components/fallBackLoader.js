import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'

const FallbackLoader = () => {
  return (
    <Row xs={1} md={1}>
      <Col className="container-center">
        <Spinner animation="border" role="status"></Spinner>
      </Col>
   </Row>

  )
}

export default FallbackLoader
