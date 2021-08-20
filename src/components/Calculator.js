import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import calculate from '../logic/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer = (e) => {
    const newState = calculate(this.state, e.target.value);
    this.setState(newState);
    const showAnswer = document.querySelector('.answer');
    if (newState.next !== null) {
      showAnswer.innerHTML = newState.next;
    } else {
      showAnswer.innerHTML = newState.total;
    }
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
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="AC">AC</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="+/-">+/-</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="%">%</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange" onClick={this.getAnswer} value="÷">÷</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="7">7</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="8">8</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="9">9</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange" onClick={this.getAnswer} value="x">x</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="4">4</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="5">5</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="6">6</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange" onClick={this.getAnswer} value="-">-</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="1">1</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="2">2</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="3">3</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange" onClick={this.getAnswer} value="+">+</Button>
          </Col>
        </Row>

        <Row className="row-grid">
          <Col xs={6}>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value="0">0</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-gray" onClick={this.getAnswer} value=".">.</Button>
          </Col>
          <Col>
            <Button type="button" className="item item-orange" onClick={this.getAnswer} value="=">=</Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Calculator;
