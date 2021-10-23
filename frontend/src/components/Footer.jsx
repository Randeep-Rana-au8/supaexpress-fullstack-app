import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center py-3">
          <Col>
            Copyright &copy; SupaExpress (Made with ❤️ by{" "}
            <a href="http://rana-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
              <span style={{ color: "red" }}>Randeep Rana</span>
            </a>
            )
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
