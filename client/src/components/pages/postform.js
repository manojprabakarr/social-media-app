import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Fetch_Posts_Query } from "../../utils/graphql";

function Postform() {
  const [values, setpost] = useState({ body: "" });
  const { body } = values;

  const onchange = (e) =>
    setpost({ ...values, [e.target.name]: e.target.value });

  const [createPost, { error }] = useMutation(POST_FORM, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: Fetch_Posts_Query,
        data: {
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });
      values.body = "";
    },
    onError() {
      if (error) {
        console.log(error);
      }
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createPost();
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
            value={body}
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
