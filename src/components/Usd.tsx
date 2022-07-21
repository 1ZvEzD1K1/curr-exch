import React, { FC, useState } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";

type UsdProps = {
  rate: number;
};

const Usd: FC<UsdProps> = ({ rate }) => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCalculate = (): void => {
    setTotal(Math.floor(rate * quantity));
    setQuantity(0);
  };

  const handleOnPres = (e: any): void => {
    if (e.code === "Enter") {
      setTotal(Math.floor(rate * quantity));
      setQuantity(0);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <InputGroup className="mb-3" style={{ margin: "20px" }}>
          <InputGroup.Text id="inputGroup-sizing-default">UAH</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            onKeyPress={handleOnPres}
          />
          <Button onClick={handleCalculate} variant="secondary">
            Calculate
          </Button>
          <InputGroup.Text>Total: {total}</InputGroup.Text>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Usd;
