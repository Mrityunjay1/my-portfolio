import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden md:overflow-visible"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
      {/* BACKGROUND ELEMENTS END */}
      <Wrapper>
        {/* SKILL ICONS START */}
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
          <SkillIcon path={sk1} />
          <SkillIcon path={sk2} />
          <SkillIcon path={sk3} />
          <SkillIcon path={sk4} />
          <SkillIcon path={sk5} />
          <SkillIcon path={sk6} />
          <SkillIcon path={sk7} />
          <SkillIcon path={sk8} />
          <SkillIcon path={sk9} />
          <SkillIcon path={sk10} />
          <SkillIcon path={sk11} />
        </Div>
        {/* SKILL ICONS END */}

        {/* SERVICES SECTION START */}
        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
          {/* SERVICES START */}
          <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            <Service
              num="1"
              title="Frontend Developer - BharatPe "
              date="06/2022 - 10/2022"
              desc="Responsible for creating visually appealing and user-friendly web interfaces that are optimized for different devices and screen sizes.
              Writing clean, maintainable, and efficient code using JavaScript and React Js to create dynamic and interactive web pages.
              Ensuring that the website looks and functions correctly across different browsers and devices.
              Working closely with the Backend Developers, Designers, and Product Managers to ensure that the website meets the project requirements and is delivered on time."
              data={[
                "React",
                "Tailwind Css",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            />
            <Service
              num="2"
              title="Devops Engineer - TrueTech Solutions (Pwc)"
              date="09/2021 - 06/2022"
              desc="Create and maintain fully automated CI/CD pipelines for code deployment using Jenkins.
              Actively manage, improve, and monitor cloud infrastructure on AWS, EC2, S3, and RDS.
              Built and deployed Docker containers to break up monolithic app into microservices, improving developer workflow, increasing scalability, and optimizing speed
              Managed GitHub repositories and permissions, including branching and tagging."
              data={["Jenkins", "Docker", "Kubernetes", "Aws", "Azure"]}
            />
            <Service
              num="3"
              title="Devops Engineer - KPI Ninja"
              date="01/2021 - 06/2021"
              desc="Creating CI/CD Jenkins pipelines.
              Deploying Application into Kubernetes clusters. Creating Docker Images
              Working with different AWS services."
              data={["Jenkins", "Kubernetes", "Sumo dog", "Prototype"]}
            />
            <Service
              num="4"
              title="Operations Associate - Accenture Solutions"
              date="02/2020 - 11/2020"
              desc="Supporting End point clients with their O365 solution. 
              Helping them to setup O365 applications."
              data={["Office 365"]}
            />
            <Service
              num="5"
              title="Wordpress Associate Inter - Millionify Business Solutions"
              date="12/2018 - 10/2019"
              desc=" Creating wordpress web applications.
              Creating marketing funnel.
              Editing wordpress applications with the help of Elementor.
              Email Marketing with the help of Zapier."
              data={["wordpress", "zapier", "email templating"]}
            />
          </div>
          {/* SERVICES END */}

          {/* SECTION HEADING START */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
            <span>Solving</span>
            <span>Problems</span>
            <span className="flex items-center gap-2">
              Through
              <img src={pattern} className="block md:hidden w-[80px] mt-1" />
            </span>
            <span className="flex items-center gap-4">
              Good{" "}
              <img
                src={pattern}
                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
              />
            </span>
            <span>Services</span>
          </div>
          {/* SECTION HEADING END */}
        </div>
        {/* SERVICES SECTION END */}

        <Portfolio />
        <Achievements />
      </Wrapper>
    </div>
  );
};

export default Skills;
