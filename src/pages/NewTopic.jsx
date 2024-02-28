import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const NewTopic = () => {
  const navigate = useNavigate();

  const addNewTopic = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    const json = await response.json();

    if (response.ok) {
      navigate(`/wiki/${json.id}`);
    }
  };

  return (
    <div>
      <h2>Add a new topic</h2>
      <Form onSubmit={addNewTopic}>
        <InputGroup className="mb-2">
          <FormControl name="title" type="text" autoComplete="off" />
        </InputGroup>
        <InputGroup className="mb-2">
          <FormControl
            name="content"
            as="textarea"
            rows="5"
            autoComplete="off"
          />
        </InputGroup>
        <Button as="input" value="Add" type="submit" />
      </Form>
    </div>
  );
};
