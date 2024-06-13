import React from "react";

import List from "../List/List";

import ProductLSM2 from "../../assets/product/productLMS2.jpg";
import ProductLSM3 from "../../assets/product/productLMS3.jpg";
import ProductLSM4 from "../../assets/product/productLMS4.jpg";



const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto py-10"}>
          <h1 className={"text-2xl font-semibold"}>Key Features:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Personalized User Experience</h2>
            <List>
              We understand that every educational institution has distinct
              needs. Our customization solutions go beyond the ordinary,
              providing a personalized user experience for both educators and
              learners. Enjoy an LMS that reflects your institution's identity
              and caters to your specific requirements.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Custom Themes and Branding</h2>
            <List>
              Make a lasting impression with a customized Moodle LMS that
              resonates with your brand. Our experts craft unique themes and
              branding elements to enhance the visual appeal and coherence of
              your online learning platform
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Enhanced Functionality with Plugins</h2>
            <List>
              Extend the functionality of your Moodle LMS with tailor-made
              plugins. Whether you require specialized assessment tools,
              communication features, or reporting modules, our customization
              solutions integrate seamlessly to meet your institution's needs.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Adaptive Course Structures</h2>
            <List>
              Cater to diverse learning styles with adaptive course structures.
              Our customization allows you to create courses that align with
              your pedagogical approach, ensuring an engaging and effective
              learning experience for students.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Responsive Design</h2>
            <List>
              In the era of mobile learning, our customization ensures that your
              Moodle LMS is not just accessible but optimized for a seamless
              experience across devices. Empower learners to access content
              anytime, anywhere.
            </List>
          </div>
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL for Moodle LMS Customization?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Proven Expertise</h2>
            <List>
              With a track record of successful Moodle LMS customizations, we
              bring a wealth of expertise to every project.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Collaborative Approach</h2>
            <List>
              We believe in collaboration. Our team works closely with your
              institution to understand its unique requirements and goals,
              ensuring a customized solution that exceeds expectations.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Ongoing Support and Maintenance</h2>
            <List>
              Our commitment doesn't end with customization. Benefit from
              continuous support and maintenance services to keep your Moodle
              LMS running smoothly.{" "}
            </List>
          </div>
        </div>

        <div className={"mx-auto pb-12 w-[70%] lg:w-[70%] h-[90%]"}>
          <img src={ProductLSM2} alt="Our Expertise" draggable={"false"} />
        </div>
        <div className={"mx-auto pb-12 w-[70%] lg:w-[70%] h-[90%]"}>
          <img src={ProductLSM4} alt="Our Expertise" draggable={"false"} />
        </div>

        <div className="text-secondary text-center pb-12">
          Experience the difference of a tailored Moodle LMS with IQSPL. Elevate
          your e-learning initiatives, foster engagement, and unlock the full
          potential of online education. Contact us today for a consultation and
          let us bring your vision to life.
        </div>

        <div className={"my-2 font-semibold"}>
          <h2 className={"pb-1.5"}>Customization</h2>
          <List>Customize Moodle LMS requirements as per your L&D needs </List>
        </div>
        <div className={"my-2 font-semibold"}>
          <h2 className={"pb-1.5"}>Theming</h2>
          <List>
            Choose and pick Moodle custom pages for user-friendly UI/UX{" "}
          </List>
        </div>
        <div className={"my-2 font-semibold"}>
          <h2 className={"pb-1.5"}>Hosting</h2>
          <List>
            Cater to the hosting needs – high to low performing Moodle sites{" "}
          </List>
        </div>
        <div className={"my-2 font-semibold"}>
          <h2 className={"pb-1.5"}>Integration</h2>
          <List>
            Can integrate your LMS with any tool – CMS, HRMS, LDAP, CiviCRM,
            LTI, etc.{" "}
          </List>
        </div>

        <div className="flex justify-center items-center pt-12 w-full h-[10rem] lg:h-[15rem] rounded-lg">
          <img
            src={ProductLSM3}
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
