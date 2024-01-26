import React from "react";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button, Stack } from "react-bootstrap";
import { Button } from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="primary">Add Expense</Button>
        </Stack>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill," }}
        />
      </Container>
      <Router />
    </BrowserRouter>
  );
}

export default App;
