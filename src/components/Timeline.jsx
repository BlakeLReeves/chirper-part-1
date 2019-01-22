import React from 'react';
import { Card, CardTitle, CardText, Col} from 'reactstrap';

const Timeline = (props) => {
    return (
        <Col sm="6">
            <Card body className="col-md-12 m-2">
                <CardTitle className="p-2 border border-dark border-top-0 border-left-0 border-right-0">{props.chirp.username} Chirped!</CardTitle>
                <CardText className="p-2">{props.chirp.chirp}</CardText>
            </Card>
        </Col>
    );
};

export default Timeline;