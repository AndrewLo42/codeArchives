import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';

function TechCard(props) {
  if (props.tech.src === 'blank') {
    return (
      <Col className={`${props.tech.src}  mobile-skills-card`}></Col>
    );
  }
  return (
    <Col lg="7" md="7" sm="5" className=" py-sm-3 mobile-skills-card">
      <Card className="h-100 skills-card">
        <CardBody>
          <i className={`card-icon ${props.tech.src}`}></i>
          <div className="my-3">
            <h4 className="text-center skills-text">{props.tech.name}</h4>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default TechCard;
