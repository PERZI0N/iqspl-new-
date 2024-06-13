import React from "react";

import List from "../List/List";

import ProductCyber1 from "../../assets/product/productCyber1.jpg";
import productCyber2 from "../../assets/product/productCyber2.jpg"
import productCyber5 from "../../assets/product/productCyber5.jpg";
const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto pt-12"}>
          <h1 className={"text-2xl font-semibold"}>Key Features:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Hands-On Learning Environment</h2>
            <List>
              Our Cyber Lab solutions provide an immersive, hands-on learning
              experience for universities. Equipped with real-world scenarios,
              these labs offer students and professionals the opportunity to
              apply theoretical knowledge in a practical, controlled
              environment.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Customizable Training Modules</h2>
            <List>
              Tailor cybersecurity training to your specific needs. Whether
              you're an educational institution shaping the next generation of
              cybersecurity experts or a corporate entity enhancing your team's
              capabilities, our Cyber Lab solutions offer customizable training
              modules to meet diverse learning objectives.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Advanced Simulation Technologies</h2>
            <List>
              Immerse participants in realistic cybersecurity simulations. Our
              labs leverage advanced technologies to simulate cyber threats,
              enabling learners to hone their skills in identifying, preventing,
              and mitigating cyber attacks.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Incident Response Training</h2>
            <List>
              Prepare your teams for real-world cyber incidents. Our Cyber Lab
              solutions include specialized training in incident response,
              equipping participants with the skills and knowledge to handle
              cybersecurity emergencies effectively.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Collaborative Learning Environments</h2>
            <List>
              Fostering collaboration is essential in cybersecurity. Our Cyber
              Lab solutions create collaborative learning environments, allowing
              participants to work together in addressing complex challenges and
              developing effective cybersecurity strategies.
            </List>
          </div>
        </div>

        <div className={"mx-auto pb-12 w-[80%] lg:w-[80%] h-[90%]"}>
          <img src={productCyber5} alt="Our Expertise" draggable={"false"} />
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold py-6"}>
            Why Choose IQSPL Cyber Lab Solutions?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>
              Tailored for Universities and Corporations
            </h2>
            <List>
              Our Cyber Lab solutions are uniquely crafted to meet the specific
              needs of both educational institutions and corporate entities,
              ensuring relevance and effectiveness.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Expert Guidance</h2>
            <List>
              Benefit from the guidance of cybersecurity experts. Our team is
              dedicated to providing support, mentorship, and insights to
              maximize the impact of the Cyber Lab experience.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Scalable Solutions</h2>
            <List>
              Whether you're a small university or a large corporate enterprise,
              our Cyber Lab solutions are scalable to accommodate varying levels
              of complexity and participant numbers.{" "}
            </List>
          </div>
        </div>

        <div className="text-secondary text-center pb-12">
          Elevate your cybersecurity preparedness with IQSPL. Our Cyber Lab
          solutions provide a transformative learning experience, preparing
          individuals and teams to navigate the ever-evolving landscape of
          cybersecurity with confidence. Contact us today for a personalized
          consultation and take the first step towards a more secure digital
          future.
        </div>

        <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
          <img
            src={productCyber2}
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
