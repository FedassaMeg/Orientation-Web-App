import React from "react";

import get from "lodash/get";

import VideoContainer from "../components/video/VideoContainer";
import ViewWrapper from "../components/components/ViewWrapper";

const videosLookup = {
  "blood-borne-pathogens": {
    key: 1,
    title: "Blood Borne Pathogens",
    url: "blood-borne-pathogens"
  },
  "elder-abuse-and-neglect": {
    key: 2,
    title: "Elder Abuse and Neglect",
    url: "elder-abuse-and-neglect"
  },
  "infection-control-bag-technique": {
    key: 3,
    title: "Infection Control Bag Technique",
    url: "infection-control-bag-technique"
  },
  "proper-body-mechanics-and-back-safety": {
    key: 4,
    title: "Proper Body Mechanics and Back Safety",
    url: "proper-body-mechanics-and-back-safety"
  },
  "driving-safety": {
    key: 5,
    title: "Driving Safety",
    url: "driving-safety"
  },
  hipaa: {
    key: 6,
    title: "Hipaa",
    url: "hipaa"
  },
  "personal-safety": {
    key: 7,
    title: "Personal Safety",
    url: "personal-safety"
  },
  "sexual-harassment-in-health-care": {
    key: 8,
    title: "Sexual Harassment",
    url: "sexual-harassment"
  }
};

export default function VideosPage({ match }) {
  const video = get(videosLookup, match.params.id);

  return (
    <ViewWrapper>
      <VideoContainer video={video} />
    </ViewWrapper>
  );
}
