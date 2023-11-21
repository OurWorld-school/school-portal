import React from "react";
import { Col, Row } from "react-bootstrap";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from "@material-ui/core";

const AdmissionPortal = () => {
  return (
    <>
      <TopNavBar />
      <Header />
      <Container>
        <div
          style={{
            fontSize: "18px",
            margin: "auto",
          }}
        >
          <Row>
            <Col
              className="text-center py-3"
              style={{ fontSize: "22px", textTransform: "uppercase" }}
            >
              Admission Prospectus for NURSERY AND CRECHE
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <div>
                  {" "}
                  <strong>1.Ist Term </strong>
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  {" "}
                  <strong>ii.</strong> Uniform 30,000
                </div>
                <div>
                  {" "}
                  <strong>iii.</strong>
                  Stationaries 10,000
                </div>
                <div>
                  <strong>iv.</strong> cardigan 8,000
                </div>
                <div>
                  <span>
                    <strong>Total</strong>{" "}
                  </span>
                  <span>
                    <strong>95,000</strong>
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  {" "}
                  <strong>Toiletries</strong>
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 2 Big tissues
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 250Ml of dettol
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 850ML Detergent
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <strong>2nd term</strong>
                </div>
                <div>
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  <strong>ii.</strong> P.T.A 3,000
                </div>
              </div>
              <div>
                <strong>Total 50,000</strong>
              </div>
              <div className="mt-4">
                <div>
                  <strong>3rd term</strong>
                </div>
                <div>
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  <strong>ii.</strong> P.T.A 3,000
                </div>
                <div>
                  <strong>iii</strong> Gradution 5,000
                </div>
                <div>
                  <strong>Total 55,000</strong>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <strong>BOOKS</strong>
                </div>
                <div>Pre-nursery 25,000</div>
                <div>Nursery 1-2. 32,000</div>
                <div>Lesson 3,000</div>
                <div>Registration. 2,000</div>
              </div>
              <div>
                <strong>Total for Nursery = 132,000</strong>
              </div>
              {/* <div>
                <strong>Total for primary 122,000</strong>
              </div> */}
            </Col>
          </Row>
          <Row>
            <Col
              className="text-center py-3 mt-4"
              style={{ fontSize: "22px", textTransform: "uppercase" }}
            >
              Admission Prospectus For basic classes
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <div>
                  {" "}
                  <strong>1.Ist Term </strong>
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  {" "}
                  <strong>ii.</strong> Uniform 30,000
                </div>
                <div>
                  {" "}
                  <strong>iii.</strong>
                  Stationaries 10,000
                </div>
                <div>
                  <strong>iv.</strong> cardigan 8,000
                </div>
                <div>
                  <span>
                    <strong>Total</strong>{" "}
                  </span>
                  <span>
                    <strong>95,000</strong>
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  {" "}
                  <strong>Toiletries</strong>
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 2 Big tissues
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 250Ml of dettol
                </div>
                <div>
                  {" "}
                  <strong>i.</strong> 850ML Detergent ( vivaplus/sunlight)
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <strong>2nd term</strong>
                </div>
                <div>
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  <strong>ii.</strong> P.T.A 3,000
                </div>
              </div>
              <div>
                <strong>Total 50,000</strong>
              </div>
              <div className="mt-4">
                <div>
                  <strong>3rd term</strong>
                </div>
                <div>
                  <strong>i.</strong> Tuition 47,000
                </div>
                <div>
                  <strong>ii.</strong> P.T.A 3,000
                </div>
                <div>
                  <strong>iii.</strong> Gradution 5,000
                </div>
                <div>
                  <strong>Total 55,000</strong>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <strong>BOOKS</strong>
                </div>
                <div>Basic 1-6 40,000</div>
                <div>Nursery 3. 40,000</div>
                <div>Lesson 3,000</div>
                <div>Registration. 2,000</div>
              </div>
              <div>
                <strong>Total for Basic 1-6 = 140,000</strong>
              </div>
              <div>
                <strong>Total for Nursery3. = 140,000</strong>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />{" "}
    </>
  );
};

export default AdmissionPortal;
