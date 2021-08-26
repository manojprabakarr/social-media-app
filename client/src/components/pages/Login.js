import React, { useState, useContext } from "react";
import { Form, Segment, Grid, Button, Header } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/authContext";

function Login(props) {
  const context = useContext(AuthContext);

  const intailstate = {
    username: "",
    password: "",
  };
  const [errors, setErrors] = useState({});
  const [values, setvalues] = useState(intailstate);

  const onchange = (e) =>
    setvalues({ ...values, [e.target.name]: e.target.value });

  const { username, password } = values;

  const [LoginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userdata } }) {
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
    LoginUser();
  };

  return (
    <div className="login">
      <Grid style={{ marginTop: "150px" }}>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h3" textAlign="center" id="register-header">
              Socialmedia Login
            </Header>
            <Form
              onSubmit={handleSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <Segment>
                <Form.Input
                  type="text"
                  label="username"
                  name="username"
                  value={username}
                  onChange={onchange}
                  error={errors.username ? true : false}
                  placeholder="username"
                />

                <Form.Input
                  type="password"
                  label="password"
                  name="password"
                  value={password}
                  onChange={onchange}
                  error={errors.password ? true : false}
                  placeholder="password"
                />

                <div className="btndata">
                  <Button color="blue" type="submit">
                    Login
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      token
      createdAt
    }
  }
`;

export default Login;
