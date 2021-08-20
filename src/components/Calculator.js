import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function

function Calculator() {
  const [state, setState] = useState({ total: '0' });
  const getAnswer = (event) => {
    const text = event.target.value;
    const objstate = state;
    const newState = calculate(objstate, text);
    setState(newState);
    const calculatorDisplay = document.querySelector('.answer');
    if (newState.total === null && newState.next === null && newState.operation === null) {
      calculatorDisplay.innerHTML = '0';
    } else if (newState.next !== null) {
      calculatorDisplay.textContent = newState.next;
    } else if (newState.next === null && newState.total !== null) {
      calculatorDisplay.textContent = newState.total;
    }
  };

  return (
    <Container className="main-container">
      <Row>
        <Col>
          <Button type="button" className="answer">0</Button>
        </Col>
      </Row>
      <Row className="row-grid">
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="AC">AC</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="+/-">+/-</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="%">%</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-orange" onClick={getAnswer} value="÷">÷</Button>
        </Col>
      </Row>

      <Row className="row-grid">
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="7">7</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="8">8</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="9">9</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-orange" onClick={getAnswer} value="x">x</Button>
        </Col>
      </Row>

      <Row className="row-grid">
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="4">4</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="5">5</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="6">6</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-orange" onClick={getAnswer} value="-">-</Button>
        </Col>
      </Row>

      <Row className="row-grid">
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="1">1</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="2">2</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="3">3</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-orange" onClick={getAnswer} value="+">+</Button>
        </Col>
      </Row>

      <Row className="row-grid">
        <Col xs={6}>
          <Button type="button" className="item item-gray" onClick={getAnswer} value="0">0</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-gray" onClick={getAnswer} value=".">.</Button>
        </Col>
        <Col>
          <Button type="button" className="item item-orange" onClick={getAnswer} value="=">=</Button>
        </Col>
      </Row>

    </Container>
  );
}

export default Calculator;
