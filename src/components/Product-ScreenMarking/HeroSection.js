import React from "react";

import heroBackground from "../../assets/product/productMarking1.jpg";
import List from "../List/List";

const HeroSection = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("hello");
    window.open(" https://red-kingfisher-315080.builder-preview.com/onscreen-marking-software", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              On screen marking software
            </h1>
          </div>
        </div>

        <h1
          className={
            "text-2xl font-semibold text-quaternary text-center pt-12 pb-8"
          }
        >
          Streamline the assessment process with Onscreen Evaluation,
          simplifying the grading of answer sheets
        </h1>

        {/* <div className={"text-secondary text-center "}>
          Efficiently assess answer sheets with Intelligent Result Processing
        </div> */}
        <div
          className={"text-secondary text-center text-xl font-semibold py-4"}
        >
          What is Onscreen Marking ?
        </div>
        <div className={"text-secondary text-center "}>
          <List>Streamline Answer Sheet Evaluation</List>
          <List>Effortlessly Share Evaluated Answer Scripts with Students</List>
          <List>Seamless Moderation and Result Processing Management</List>
          <List>
            Accelerate Exam Result Publication with Precision and Efficiency
          </List>
          <List>Discover Key Features and Begin Today</List>
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href=" https://red-kingfisher-315080.builder-preview.com/onscreen-marking-software" onClick={handleButton} rel="noreferrer" target="_blank">
            <button
              className="p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300"
              type="submit"
            >
              Explore
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
