import React, { useContext } from "react";
import { Grid, Label, Container, Transition } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Post from "./postdata";
import Postform from "./postform";
import { AuthContext } from "../../context/authContext";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  let posts = [];
  if (data) {
    posts = data.getPosts;
  }
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
          {user && (
            <Grid.Row>
              <Postform />
            </Grid.Row>
          )}
        </Grid.Row>
        <Grid.Row>
          {!loading && (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column>
                    <Post post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
