import React from "react";
import { education, experiences } from "../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard";
const Education = () => {
  return (
    // container
    <div
      id="education"
      className="flex flex-col justify-center items-center relative z-1 pb-0 px-0 md:pb-[60px]"
    >
      {/* wrapper */}
      <div className="flex flex-col justify-between items-center   w-full max-w-[1350px]  pt-10 gap-3">
        <h1 className="text-[32px] text-center font-semibold mt-3 md:mt-5 md:text-[42px]  text-darkTheme-text_primary">
          Education
        </h1>
        <p className=" text-[16px] md:text-[18px] text-center max-w-[600px] text-darkTheme-text_secondary mt-3 md:m-0">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        {/* TimelineSection */}
        <div className="w-full max-w-[1000px] mt-[10px] flex flex-col items-end justify-center gap-3 sm:items-center">
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
