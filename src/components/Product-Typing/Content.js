import React from "react";

import List from "../List/List";

import ProductTyping2 from "../../assets/product/productTyping2.jpg";
import ProductTyping3 from "../../assets/product/productTyping3.jpg";

const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto pb-8"}>
          <h1 className={"text-2xl font-semibold"}>Key Features:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Intuitive Typing Interface</h2>
            <List>
              Our typing software offers an intuitive interface, ensuring a
              smooth and user-friendly typing experience for government
              employees. Navigate through documents seamlessly and enhance
              productivity.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Government-Specific Modules</h2>
            <List>
              Tailored to meet the unique requirements of government
              documentation, our software includes specialized modules catering
              to various official typing needs. From legal documents to
              administrative forms, streamline your typing processes
              effortlessly.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Multi-language Support</h2>
            <List>
              Accommodate diverse linguistic needs with our multi-language
              support feature. Type documents in multiple languages, ensuring
              accuracy and compliance with linguistic requirements.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Security and Confidentiality</h2>
            <List>
              Prioritize data security with our software's robust security
              measures. Safeguard sensitive government information with
              encrypted files and secure access controls.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Real-world Scenarios</h2>
            <List>
              Our typing software goes beyond theory, presenting students with
              real-world scenarios commonly encountered in government typing
              centers. From drafting official communications to transcribing
              legal documents, our practical assignments simulate the diverse
              challenges faced in daily operations.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Skill Development</h2>
            <List>
              Elevate typing skills through targeted exercises. Our assignments
              focus on improving accuracy, speed, and efficiency, providing a
              well-rounded training experience for students aspiring to excel in
              government typing roles.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Multifaceted Assignments</h2>
            <List>
              Explore a variety of typing assignments covering different
              government documentation types. Students gain exposure to typing
              official letters, reports, meeting minutes, and other document
              types crucial to the functioning of government offices.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Instant Feedback</h2>
            <List>
              Receive immediate feedback on performance. Our software provides
              detailed insights into typing accuracy, speed, and error analysis,
              empowering students to track their progress and identify areas for
              improvement.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Customizable Assignments</h2>
            <List>
              Tailor assignments to suit specific learning objectives.
              Instructors have the flexibility to create custom assignments that
              align with the unique requirements of their curriculum and the
              evolving needs of government typing centers.
            </List>
          </div>
        </div>

        <div className={"mx-auto w-[70%] lg:w-[30%] h-[90%] pb-14"}>
          <img src={ProductTyping2} alt="Our Expertise" draggable={"false"} />
        </div>

        <div className="pb-8">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL Typing Software?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Government-Compliant</h2>
            <List>
              Our software is designed to meet government standards and
              compliances, ensuring adherence to official protocols.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Training and Support</h2>
            <List>
              Benefit from comprehensive training resources and ongoing support.
              Our team is dedicated to assisting government typing centers in
              maximizing the software's potential.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Efficiency and Accuracy</h2>
            <List>
              Experience a significant boost in typing efficiency and accuracy.
              Our software minimizes errors and enhances the overall quality of
              typed documents.{" "}
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Practical Learning</h2>
            <List>
              Our software prioritizes practical, hands-on learning experiences,
              ensuring that students are well-prepared for the demands of
              government typing roles{" "}
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Educational Support</h2>
            <List>
              Access a wealth of educational resources, including tutorials and
              guides, to complement the practical assignments. Our aim is to
              facilitate a holistic learning journey.{" "}
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Student Progress Tracking</h2>
            <List>
              Monitor and assess student progress effortlessly. Our software
              provides comprehensive analytics to help instructors gauge
              individual and class-wide performance.{" "}
            </List>
          </div>
        </div>

        <div className="text-secondary text-center pb-12">
          Elevate the typing capabilities of your typing center with our
          state-of-the-art typing software. Explore the features that will
          revolutionize your typing processes and contribute to a more efficient
          and effective government workflow. Contact us today for a personalized
          demonstration and discover how our typing software can transform your
          typing center operations. Transform the training experience for
          government typing center students with our typing software's maximum
          assignments featuring different scenarios. Equip them with the skills
          and confidence needed to excel in the realm of government
          documentation
        </div>

        <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg py-6">
          <img
            src={ProductTyping3}
            alt="SD - WAN"
            draggable={"false"}
            className="w-full h-[10rem] lg:h-[15rem] rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Content;
