import { useMutation } from "@apollo/react-hooks";
import React, { useState, useContext } from "react";
import { Form, Segment, Grid, Button, Header } from "semantic-ui-react";
import { AuthContext } from "../../context/authContext";
import gql from "graphql-tag";

function Register(props) {
  const context = useContext(AuthContext);

  const intailstate = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(intailstate);

  const { username, email, password, confirmpassword } = values;

  const onchange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const [addUser, { loading }] = useMutation(REGISTERUSER, {
    update(_, { data: { register: userdata } }) {
      context.login(userdata);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className="register">
      <Grid style={{ marginTop: "150px" }}>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h3" textAlign="center" id="register-header">
              Socialmedia Register
            </Header>
            <Form
              onSubmit={handleSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <Segment>
                <Form.Input
                  label="Username"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={onchange}
                  error={errors.username ? true : false}
                  type="text"
                />
                <Form.Input
                  label="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={onchange}
                  error={errors.email ? true : false}
                  type="email"
                />
                <Form.Input
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={onchange}
                  error={errors.password ? true : false}
                  type="password"
                />
                <Form.Input
                  label="Confirm Password"
                  placeholder="Enter password again"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={onchange}
                  error={errors.confirmpassword ? true : false}
                  type="password"
                />

                <div className="btndata">
                  <Button color="blue" type="submit">
                    Register
                  </Button>
                </div>
              </Segment>
            </Form>
            {Object.keys(errors).length > 0 && (
              <div className="ui error message">
                <ul className="list">
                  {Object.values(errors).map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

const REGISTERUSER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmpassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmpassword: $confirmpassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
