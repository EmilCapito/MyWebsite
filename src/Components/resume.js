import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Education2 from "./education2";
import Experience from "./experience";
import Skills from "./skills";
import Picture from "./assets/OldFormalSelf.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img className="formalPicture" src={Picture} alt="avatar" />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Emil Capito</h2>
            <h4 style={{ color: "grey" }}>Computer Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>39 Floral Drive Wheeling, WV</p>
            <h5>Phone</h5>
            <p>(304) 280-4470</p>
            <h5>Email</h5>
            <p>emil.capito@autoipacket.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Benjamin M. Statler College of Engineering and Mineral Resources
              West Virginia University Honors College"
              schoolDescription="Bachelor of Science in Computer Engineering: Degree to be conferred May 2021"
            />
            <Education2
              info="March 2019"
              schoolName="Education Abroad"
              schoolDescription="Munich, Germany: Short-term faculty led engineering study abroad"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear="Spring 2019"
              endYear="Summer 2019"
              jobName="Mobile App Developer Intern"
              jobDescription="Testing, Coding, and Styling for Autoipacket mobile app"
            />
            <Experience
              startYear="Spring 2018"
              endYear="Summer 2018"
              jobName="Deli/Cheese Associate"
              jobDescription="Kroger Deli; slicing meats/cheeses"
            />
            <Experience
              startYear="Spring 2017"
              endYear="Summer 2017"
              jobName="Garden Center Associate"
              jobDescription="Various landscaping and floral duties; Nicky’s Garden Center"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="MatLab" progress={90} />
            <Skills skill="javascript" progress={50} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
