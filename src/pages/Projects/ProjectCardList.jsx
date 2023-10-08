import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ProjectsCard from "./ProjectsCard";
import "./projectcardlist.css";

function ShowListOfProjects() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    let oneproject = [];
    for (let i = 0; i < 10; i++) {
      oneproject.push(genProjectDetail());
    }
    // console.log(people);
    setProject(oneproject);
  }, []);
  return (
    <div className="project-list">
      {project.map((singleproject, index) => (
        <ProjectsCard
          key={index}
          index={index}
        image = {singleproject.image}
        name = {singleproject.name}
        about = {singleproject.about}
        />
      ))}
    </div>
  );
}


function genProjectDetail() {
  const bio = [
    "Dedicated and experienced customer service representative with a passion for helping people. She has a knack for resolving customer issues quickly and efficiently, and she always goes the extra mile to make sure that customers are satisfied.",
    "Friendly and knowledgeable IT support technician with over 10 years of experience. He is always up-to-date on the latest technologies, and he is always willing to help customers troubleshoot their computer problems.",
    "Compassionate and efficient nurse who is dedicated to providing her patients with the best possible care. She is always willing to go the extra mile, and she is always putting her patients' needs first.",
    "Hard-working and reliable construction worker who is always willing to put in the extra effort. He is always willing to learn new things, and he is always looking for ways to improve his skills.",
    "Creative and talented graphic designer who is always looking for new ways to express herself. She is always willing to take on new challenges, and she is always striving to improve her skills.",
    "Bright and inquisitive engineer who is always looking for new ways to solve problems. He is always willing to learn new things, and he is always looking for ways to improve his skills.",
    "A kind and compassionate social worker who is dedicated to helping people in need. He is always willing to listen to people's problems, and he is always looking for ways to help them.",
    "Patient and understanding teacher who is dedicated to helping her students learn. She is always willing to go the extra mile, and she is always looking for new ways to help her students succeed.",
    "Motivated and ambitious businessperson who is always looking for new ways to grow her business. She is always willing to take risks, and she is always looking for new opportunities.",
    "Responsible and trustworthy accountant who is dedicated to providing his clients with the best possible service. He is always willing to go the extra mile, and he is always looking for ways to improve his skills.",
    "Hardworking and dedicated firefighter who is always willing to put his life on the line to protect others. He is always willing to help others, and he is always looking for ways to make a difference in the world.",
    "Talented and creative artist who is always looking for new ways to express himself. She is always willing to take risks, and she is always looking for new opportunities.",
    "Friendly and outgoing salesperson who is always willing to help his customers find the perfect product. He is always up-to-date on the latest products, and he is always willing to go the extra mile to make sure that his customers are satisfied.",
    "Brilliant and innovative scientist who is always looking for new ways to solve problems. He is always willing to learn new things, and he is always looking for ways to improve his skills.",
    "Compassionate and efficient social worker who is dedicated to helping people in need. She is always willing to listen to people's problems, and she is always looking for ways to help them.",
    "Responsible and trustworthy manager who is dedicated to providing his team with the best possible support. He is always willing to go the extra mile, and he is always looking for ways to improve his skills.",
    "Hard-working and dedicated soldier who is always willing to put his life on the line to protect his country. He is always willing to help others, and he is always looking for ways to make a difference in the world.",
    "Friendly and outgoing customer service representative who is always willing to help her customers. She is always up-to-date on the latest products, and she is always willing to go the extra mile to make sure that her customers are satisfied.",
    "Talented and creative writer who is always looking for new ways to express herself. She is always willing to take risks, and she is always looking for new opportunities.",
    "Compassionate and efficient nurse who is dedicated to providing her patients with the best possible care. She is always willing to go the extra mile, and she is always putting her patients' needs first.",
  ];
  
  let projectwindow = {};
  projectwindow.name = faker.person.fullName();
  projectwindow.about = bio[Math.floor(Math.random()*bio.length)];
  projectwindow.image = faker.image.avatar();
  return projectwindow;
}

export default ShowListOfProjects;