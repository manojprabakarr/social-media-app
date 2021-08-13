import React from "react";
import { Form, Segment, Grid, Button, Header } from "semantic-ui-react";

function Login() {
  return (
    <div className="login">
      <Grid style={{ marginTop: "150px" }}>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h3" textAlign="center" id="register-header">
              Socialmedia Login
            </Header>
            <Form>
              <Segment>
                <Form.Input
                  type="text"
                  label="username"
                  placeholder="username"
                />

                <Form.Input
                  type="password"
                  label="password"
                  placeholder="password"
                />

                <div className="btndata">
                  <Button color="blue" type="submit">
                    Login
                  </Button>
                </div>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Login;
