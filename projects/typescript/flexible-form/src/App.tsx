import { useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import Form from "./Form";
import Input from "./Input";

type FormHandle = {
  clear: () => void;
};

export default function App() {
  const form = useRef<FormHandle>(null);

  function handleSubmit(data: unknown) {
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    console.log(data);
    form.current?.clear();
  }

  return (
    <Container as="main">
      <h1>Flexible Form</h1>
      <Form onSubmit={handleSubmit} ref={form}>
        <Input type="text" id="name" label="Name" />
        <Input type="number" id="age" label="Age" />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
