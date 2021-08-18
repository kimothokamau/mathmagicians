import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <Row>
          <Col className="answer"> 0 </Col>
        </Row>
        <Row>
          <Col className="item item-gray"> AC </Col>
          <Col className="item item-gray"> +/- </Col>
          <Col className="item item-gray"> % </Col>
          <Col className="item item-orange"> / </Col>
        </Row>

        <Row>
          <Col className="item item-gray"> 7 </Col>
          <Col className="item item-gray"> 8 </Col>
          <Col className="item item-gray"> 9 </Col>
          <Col className="item item-orange"> X </Col>
        </Row>

        <Row>
          <Col className="item item-gray"> 4 </Col>
          <Col className="item item-gray"> 5 </Col>
          <Col className="item item-gray"> 6 </Col>
          <Col className="item item-orange"> - </Col>
        </Row>

        <Row>
          <Col className="item item-gray"> 1 </Col>
          <Col className="item item-gray"> 2 </Col>
          <Col className="item item-gray"> 3 </Col>
          <Col className="item item-orange"> + </Col>
        </Row>

        <Row>
          <Col xs={6} className="item item-gray"> 0 </Col>
          <Col className="item item-gray"> . </Col>
          <Col className="item item-orange"> = </Col>
        </Row>

      </Container>
    );
  }
}

export default Calculator;
