import { Form } from "@remix-run/react";

export const loader = async () => {
  console.log("Hello ");

  return Promise.resolve({ aaa: "Hello" });
};

export const action = async () => {
  console.log("Hello ");

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "GET",
  });

  const json = await response.json();

  console.log(json);

  return null;
};

const Hello = () => {
  return (
    <div>
      <Form key={1} id="contact-form" method="post">
        <button type="submit">Hello</button>
      </Form>
    </div>
  );
};

export default Hello;
