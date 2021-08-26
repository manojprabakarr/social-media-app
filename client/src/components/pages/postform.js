import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

function Postform() {
  const [post, setpost] = useState({ msg: "" });
  const { msg } = post;

  const onchange = (e) => setpost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form className="postFormContainer" onSubmit={onSubmit}>
        <Form.Field
          style={{
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Form.Input
            placeholder="Say something!"
            name="body"
            value={msg}
            onChange={onchange}
            style={{ width: "320px" }}
            type="text"
            autoComplete="off"
          />

          <Button
            type="submit"
            color="blue"
            style={{
              height: "fit-content",
              marginLeft: "10px",
            }}
          >
            Post
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
}

const POST_FORM = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likesCount
      comments {
        id
        body
        username
        createdAt
      }
      commentsCount
    }
  }
`;

export default Postform;
