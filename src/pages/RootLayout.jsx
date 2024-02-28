import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import {
  NavLink,
  Outlet,
  createSearchParams,
  useNavigate,
} from "react-router-dom";

export const RootLayout = () => {
  const navigate = useNavigate();

  const searchEntry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();

    // navigate({
    //   pathname: "/wiki/search",
    //   search: createSearchParams({ q: formData.get("q") }).toString(),
    // });

    navigate(`/wiki/search?q=${formData.get("q")}`);
  };

  return (
    <Container fluid className="py-2">
      <Row>
        <Col md={3} className="border-end">
          <header>
            <h1>Wiki</h1>
            <Form onSubmit={searchEntry}>
              <InputGroup className="mb-2">
                <FormControl
                  placeholder="Query"
                  name="q"
                  type="search"
                  autoComplete="off"
                />
              </InputGroup>
            </Form>
            <nav>
              <ListGroup>
                <ListGroup.Item>
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/wiki/new">Create new</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </nav>
          </header>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
};
