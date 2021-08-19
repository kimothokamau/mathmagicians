import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="main-container">
        <Row>
          <Col>
            <Button type="button" className="answer">0</Button>
          </Col>
        </Row>
        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray">AC</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">+/-</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">%</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange">÷</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray">7</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">8</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">9</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange">x</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray">4</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">5</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">6</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange">-</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray">1</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">2</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">3</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange">+</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col xs={6}>
            <Button type="button" className="item item-gray">0</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray">.</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange">=</Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Calculator;
