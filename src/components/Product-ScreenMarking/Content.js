import React from "react";

import List from "../List/List";

import productMarking2 from "../../assets/product/productMarking2.JPG";
import productMarking3 from "../../assets/product/productMarking3.jpg";
import productMarking4 from "../../assets/product/productMarking4.JPG";
import productMarking5 from "../../assets/product/productMarking5.jpeg";
import productMarking6 from "../../assets/product/productMarking6.jpeg";
import productMarking7 from "../../assets/product/productMarking7.jpeg";
import productMarking8 from "../../assets/product/productMarking8.jpeg";
import productMarking9 from "../../assets/product/productMarking9.jpeg";
import productMarking10 from "../../assets/product/productMarking10.jpeg";

const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto py-12"}>
          <div className={"mx-auto pb-12 w-[70%] lg:w-[60%] h-[90%]"}>
            <img
              src={productMarking3}
              alt="Our Expertise"
              draggable={"false"}
            />
          </div>
          <div className={"mx-auto pb-12 w-[70%] lg:w-[60%] h-[90%]"}>
            <img
              src={productMarking4}
              alt="Our Expertise"
              draggable={"false"}
            />
          </div>
          <h1 className={"text-2xl font-semibold"}>
            Key Features of Our On-Screen Marking Software:
          </h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Digital Annotation Tools</h2>
            <List>
              Utilize a comprehensive set of digital annotation tools for
              marking and providing feedback directly on electronic documents.
            </List>
            <List>
              Highlight, underline, comment, and annotate with ease for a
              detailed and precise evaluation process.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Collaborative Grading</h2>
            <List>
              Facilitate collaborative grading with multiple reviewers able to
              access and mark assignments simultaneously
            </List>
            <List>
              Enhance coordination and efficiency in team-based assessment
              scenarios.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Customizable Rubrics</h2>
            <List>
              Create and implement customizable rubrics to ensure standardized
              grading and consistent evaluation criteria.
            </List>
            <List>
              Streamline the assessment process with predefined scoring
              guidelines.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Integration with Assessment Platforms</h2>
            <List>
              Seamlessly integrate with existing assessment platforms or
              learning management systems to centralize grading activities.
            </List>
            <List>
              Enhance compatibility and workflow efficiency for educators.
            </List>
          </div>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Real-Time Feedback</h2>
            <List>
              Provide real-time feedback to students, fostering a more
              interactive and responsive learning environment.
            </List>
            <List>
              Improve communication and understanding between educators and
              learners.
            </List>
          </div>
        </div>

        <div className="text-secondary text-center pb-12">
          Optimize your grading processes with IQSPL's On-Screen Marking
          Software. Contact us today to explore how our solutions can
          revolutionize your assessment workflows.
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src={productMarking5} alt="Image 1" class="w-full h-auto" />
          <img src={productMarking6} alt="Image 2" class="w-full h-auto" />
          <img src={productMarking7} alt="Image 3" class="w-full h-auto" />
          <img src={productMarking8} alt="Image 4" class="w-full h-auto" />
          <img src={productMarking9} alt="Image 5" class="w-full h-auto" />
          <img src={productMarking10} alt="Image 6" class="w-full h-auto" />
        </div>
      </section>
    </>
  );
};

export default Content;
