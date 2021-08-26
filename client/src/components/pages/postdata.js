import React from "react";
import { Label, Card, Button, Image, Icon } from "semantic-ui-react";
import moment from "moment";

function Postdata({
  post: { body, createdAt, id, username, likeCount, commentCount },
}) {
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            size="mini"
            rounded
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description
            style={{
              marginTop: "20px",
              fontSize: "16px",
              backgroundColor: "transparent",
            }}
          >
            {body}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Button as="div" labelPosition="right " size="mini">
            <Button basic color="teal" size="mini">
              <Icon name="heart" />
            </Button>
            <Label basic color="teal" pointing="left">
              {likeCount}
            </Label>
          </Button>

          <Button as="div" labelPosition="right" size="mini">
            <Button basic color="blue" size="mini">
              Comment
            </Button>
            <Label basic color="blue" pointing="right">
              {commentCount}
            </Label>
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Postdata;
