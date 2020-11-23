import React from 'react';
import {Card, CardTitle, CardSubtitle, CardText, CardBody} from 'reactstrap';

const TestCard = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <CardBody>
                <CardTitle>{item[0]}</CardTitle>

                <CardText>Release year</CardText>
                <CardSubtitle>{item[1]}</CardSubtitle>

                <CardText>Budget</CardText>
                <CardSubtitle>{item[2]}</CardSubtitle>

                <CardText>Box office</CardText>
                <CardSubtitle color='danger'>{item[3]}</CardSubtitle>

                <CardText>Net profit</CardText>
                <CardSubtitle color={item[3] - item[2] > 0 ? "primary" : "danger"}>
                    {
                            Math.abs(item[3] - item[2])
                    }
                </CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default TestCard;