import React from "react";
import { Form, Segment, Grid, Button, Header } from "semantic-ui-react";

function Register() {
  return (
    <div className="register">
      <Grid style={{ marginTop: "100px" }}>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h3" textAlign="center" id="register-header">
              Socialmedia Register
            </Header>
            <Form>
              <Segment>
                <Form.Input
                  type="text"
                  label="username"
                  placeholder="username"
                />
                <Form.Input type="email" label="Email" placeholder="email" />
                <Form.Input
                  type="password"
                  label="password"
                  placeholder="password"
                />
                <Form.Input
                  type="password"
                  label="confirm password"
                  placeholder="confirm password"
                />
                <div className="btndata">
                  <Button color="blue" type="submit">
                    Register
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

export default Register;
