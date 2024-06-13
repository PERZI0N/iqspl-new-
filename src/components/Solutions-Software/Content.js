import React from "react";

import List from "../List/List";

import ExpertiseImage1 from "../../assets/solutions-software-expertise1.png";
import ExpertiseImage2 from "../../assets/solutions-software-expertise2.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 flex gap-4"}>
          <section className={"w-full"}>
            <div>
              <h1 className={"text-4xl font-semibold"}>
                On screen marking software
              </h1>
              <p className={"text-secondary pt-4"}>
                Enhance your grading and assessment processes with our advanced
                On-Screen Marking Software at IQSPL. Designed to streamline
                evaluation tasks, our software provides a digital platform for
                efficient grading, annotation, and feedback.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Digital Annotation Tools</h2>
                    <List>
                      Utilize a comprehensive set of digital annotation tools
                      for marking and providing feedback directly on electronic
                      documents.
                    </List>
                    <List>
                      Highlight, underline, comment, and annotate with ease for
                      a detailed and precise evaluation process.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Collaborative Grading</h2>
                    <List>
                      Facilitate collaborative grading with multiple reviewers
                      able to access and mark assignments simultaneously.
                    </List>
                    <List>
                      Enhance coordination and efficiency in team-based
                      assessment scenarios.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Customizable Rubrics</h2>
                    <List>
                      Create and implement customizable rubrics to ensure
                      standardized grading and consistent evaluation criteria.
                    </List>
                    <List>
                      Streamline the assessment process with predefined scoring
                      guidelines.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Integration with Assessment Platforms
                    </h2>
                    <List>
                      Seamlessly integrate with existing assessment platforms or
                      learning management systems to centralize grading
                      activities.
                    </List>
                    <List>
                      Enhance compatibility and workflow efficiency for
                      educators.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Real-Time Feedback</h2>
                    <List>
                      Provide real-time feedback to students, fostering a more
                      interactive and responsive learning environment.
                    </List>
                    <List>
                      Improve communication and understanding between educators
                      and learners.
                    </List>
                  </div>
                </div>

                <div
                  className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
                >
                  <img
                    src={ExpertiseImage1}
                    alt="Our Expertise"
                    draggable={"false"}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className={"text-4xl font-semibold"}>LMS</h1>
              <p className={"text-secondary pt-4"}>
                Empower your educational endeavors with our advanced Learning
                Management System (LMS) at IQSPL. Our LMS is designed to
                facilitate seamless and effective learning experiences,
                providing a comprehensive platform for course management,
                content delivery, and learner engagement.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Course Management</h2>
                    <List>
                      Effortlessly create, organize, and manage courses with
                      user-friendly administrative tools.
                    </List>
                    <List>
                      Streamline course enrollment, track progress, and manage
                      user access with ease.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Content Delivery</h2>
                    <List>
                      Deliver a variety of content formats, including videos,
                      documents, quizzes, and interactive materials.
                    </List>
                    <List>
                      Enhance learning engagement with multimedia content and
                      interactive assessments.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Collaborative Learning</h2>
                    <List>
                      Facilitate collaborative learning through discussion
                      forums, group activities, and peer interaction.
                    </List>
                    <List>
                      Encourage knowledge sharing and community building among
                      learners.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Assessment and Grading</h2>
                    <List>
                      Implement diverse assessment methods, including quizzes,
                      assignments, and exams.
                    </List>
                    <List>
                      Automate grading processes and provide timely feedback to
                      enhance the learning experience.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Analytics and Reporting</h2>
                    <List>
                      Utilize robust analytics tools to track learner progress,
                      engagement, and course effectiveness.
                    </List>
                    <List>
                      Generate detailed reports to inform decision-making and
                      continuous improvement.
                    </List>
                  </div>
                </div>

                <div
                  className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
                >
                  <img
                    src={ExpertiseImage2}
                    alt="Our Expertise"
                    draggable={"false"}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Content;
