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
            <Col className="text-center py-3" style={{ fontSize: "22px" }}>
              Admission Prospectus
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <strong>1. Criteria for Acceptance </strong>
              <br />
              <strong>i.</strong> The prospective student must be at ten years
              old and must have finished primary six and has taken or have
              registered for First School leaving Certificate Examination.
              <br />
              <strong>ii.</strong> New admission into Claret Academy Boarding
              Facility is strictly restricted only to students who are to join
              us from JSS1. No transfer of students into our boarding house and
              n o admission of students into the hostel from any other class
              apart from JSS1.
              <br />
              <strong>iii.</strong> The prospective student must obtain our
              entrance form, take both our entrance examination and oral
              interviews and pass them. Presently, the cut-off pass m ark point
              for our entrance examination and interview is 50% average. If a
              child did not pa ss or is withdrawn, the registration fee is
              non-refundable.
              <br />
              <strong>iv.</strong> There is no barrier of religiosity. The
              family, however, mu st accept the principles of our Catholic
              education and show interest and willingness to co-operate in the
              activities of our school. Parents are required to sign an
              undertaking to this effect.
              <br />
              <strong>v.</strong> Prospective students must present their
              baptismal certificate and/or ce rtificate of bith. After the dates
              are verified, the original certificate/s will be returned.
              <strong>vi.</strong> The students and parents must agree to an
              undertaking to abide by the rul es and regulations of the school
              which is conducive to good learning.
              <br />
              <strong>vii.</strong> The parents must show interest to co-operate
              with the principa l and the faculty in school matters.
              <br />
              <strong>viii.</strong> In terms of physical, emotional or learning
              disabilities, the parents, with the Principal and student will
              have to explore education resources which might better meet the
              child’s individual resources.
              <br />
              <strong> 2. Annual Registration Procedure </strong>
              <br />
              <strong>i.</strong> Registration of new students usually takes
              plac e in August or the first week of September each year. This is
              to enable us plan ahead for furniture, uniforms and other
              facilities to be provided for new intakes.
              <br />
              <strong>ii.</strong> The Principal together with the Academic
              Deans will p lace the students in a class which best satisfies
              his/her individual needs. Placement wi ll be determined by the
              result of our entrance examination and oral interview, a
              standardized achievement test as directed by the State and
              Archdiocesan Ministries of Education and/or report card from the
              previous schools. <br />
              <strong>iii.</strong> As a rule, siblings are not placed in the
              same classroom or the same dormitory.
              <br />
              <strong>iv.</strong> All documents and levies stipulated in the
              prospectus must be completely be submitted before registration and
              before any studen t is allowed into the hostel or into the
              classroom.
              <br />
              <strong> 3. New Registrations </strong>
              <br />
              <strong> i.</strong> New families who wish to enroll their
              children into schoo l will be directed to see the Principal who
              will request to see the report cards of p ervious school, and any
              other pertinent information relative to the child’s vital
              statistics.
              <br />
              <strong> ii.</strong> Admissions are on open to students entering
              into JSS1 through SS 2. All admissions take place starting from
              the beginning of the first term and runs through the middle of
              second term each academic year. No admissions in the third term.
              <br />
              <strong> iii.</strong> Claret Academy does not admit students into
              SS3 and definitely no registration of external candidates for
              JSSCE, WAEC or NECO examinations. <br />
              <strong>4. Transfer from other Schools</strong>
              <br />
              <strong> i.</strong> Our school is open to all children subject to
              the limitations of available space, which creates good teaching
              and learning environments.
              <br />
              <strong> ii.</strong> Students who have formerly attended other
              schools, will, after taking our entra nce examinations will also
              upon acceptance, be evaluated to determine the best level for
              their learning.
              <br />
              <strong> iii.</strong> Students coming into our school from other
              schools will be required to present their statements of result
              from previous school(s), a transfer certificate, a testimonial and
              /or written identification duly signed by the Principal of former
              school(s)
              <br />
              <strong> iv.</strong> The parents request a transfer to our school
              from any other school, a confe rence will be held to determine the
              reasons for the transfer, and to ensure that such a tr ansfer will
              be in the best interest of the child,
              <br />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />{" "}
    </>
  );
};

export default AdmissionPortal;
