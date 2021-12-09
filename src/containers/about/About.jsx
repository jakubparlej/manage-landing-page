import React from "react";
import "./About.scss";
import Feature from "../../components/feature/Feature";

function About() {
  return (
    <div className="about section__padding">
      <div className="about__desc">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital products
          teams.
        </p>
      </div>

      <div className="about__features">
        <Feature
          num="01"
          title="Track company-wide progress"
          desc="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again"
        />
        <Feature
          num="02"
          title="Advanced built-in reports"
          desc="Set internal delivery estimates and track progress towrd company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed"
        />
        <Feature
          num="03 "
          title="Everything you need in one place"
          desc="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers in all-in-one team productivity solution"
        />
      </div>
    </div>
  );
}

export default About;
