import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="answer"> 0 </Button>
          </ButtonGroup>

        </Row>
        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="item item-gray" variant="secondary">AC</Button>
            <Button className="item item-gray" variant="secondary">+/-</Button>
            <Button className="item item-gray" variant="secondary">%</Button>
            <Button className="item item-orange" variant="secondary">÷</Button>
          </ButtonGroup>
        </Row>

        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="item item-gray" variant="secondary">7</Button>
            <Button className="item item-gray" variant="secondary">8</Button>
            <Button className="item item-gray" variant="secondary">9</Button>
            <Button className="item item-orange" variant="secondary">X</Button>
          </ButtonGroup>
        </Row>

        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="item item-gray" variant="secondary">4</Button>
            <Button className="item item-gray" variant="secondary">5</Button>
            <Button className="item item-gray" variant="secondary">6</Button>
            <Button className="item item-orange" variant="secondary">-</Button>
          </ButtonGroup>
        </Row>

        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="item item-gray" variant="secondary">1</Button>
            <Button className="item item-gray" variant="secondary">2</Button>
            <Button className="item item-gray" variant="secondary">3</Button>
            <Button className="item item-orange" variant="secondary">+</Button>
          </ButtonGroup>
        </Row>

        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button className="item-double item-gray" variant="secondary">0</Button>
            <Button className="item item-gray" variant="secondary">.</Button>
            <Button className="item item-gray" variant="secondary">=</Button>
          </ButtonGroup>
        </Row>

      </Container>
    );
  }
}

export default Calculator;
