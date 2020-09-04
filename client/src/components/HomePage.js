import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button,Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Michael_Jackson from '../assets/Images/Michael_Jackson.jpg'
const Header = () => {
  return (
    <div className="container" style={{ width: "500px", marginTop: "50px" }}>
      <Card className="text-center">
        <Card.Header>Try Our Quiz</Card.Header>
        <Card.Body>
          <Card.Title>Michael Jackson Quiz</Card.Title>
          <Image style={{width: '300px', height:'350px'}} src={Michael_Jackson} rounded />
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            deserunt itaque dolores. Esse ducimus aliquid tempore ratione at
            nesciunt velit sunt, dignissimos modi, aperiam quos aut inventore in
            a dolores?
          </Card.Text>
          <Link to="/quiz">
            <Button variant="primary">Start Quiz</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
