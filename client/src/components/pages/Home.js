import React from "react";
import { Grid, Label, Container, Transition } from "semantic-ui-react";

function Home() {
  const peoples = [
    {
      image: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
      name: "Jennie",
    },
    {
      image: "https://react.semantic-ui.com/images/avatar/small/joe.jpg",
      name: "Joe",
    },
    {
      image: "https://react.semantic-ui.com/images/avatar/large/patrick.png",
      name: "Patrick",
    },
    {
      image: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
      name: "Stevie",
    },
    {
      image: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      name: "Elliot",
    },
  ];

  return (
    <div>
      <Grid columns={3} style={{ padding: "30px" }}>
        <Grid.Row>
          <Container>
            <h4
              style={{
                color: "gray",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Get to know people's at social
            </h4>
            {peoples.map((person) => (
              <Label
                key={person.name}
                as="a"
                image
                size="medium"
                style={{
                  backgroundColor: "white",
                  marginRight: "10px",
                  borderRadius: "999px",
                  // borderTopLeftRadius: "999px",
                  // borderBottomLeftRadius: "999px",
                  padding: "12px",
                }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  style={{ borderRadius: "999px" }}
                />
                {person.name}
              </Label>
            ))}
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Grid.Row>
            <Postform />
          </Grid.Row>
        </Grid.Row>
        <Grid.Row>
          <Transition.Group>
            <Grid.Column>
              <h1>Post</h1>
            </Grid.Column>
          </Transition.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
