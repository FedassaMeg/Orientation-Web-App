import React from "react";
import get from "lodash/get";

import SlideContainer from "../components/slides/SlideContainer";
import Navigation from "../components/navbar/Navigation";

const slidesLookup = {
  "introduction-to-first-call-hospice": {
    key: 1,
    title: "Introduction to First Call Hospice",
    length: 83
  },
  "message-system": {
    key: 1,
    title: "Message System",
    length: 83
  },
  "introduction-to-hospice": {
    key: 1,
    title: "Introduction to Hospice",
    length: 83
  },
  "admission-handbook": {
    key: 1,
    title: "Admission Handbook",
    length: 35
  },
  "hospice-in-care-facilities": {
    key: 1,
    title: "Hospice in Care Facilities",
    length: 29
  },
  "patients-rights": {
    key: 1,
    title: "Patient's Rights",
    length: 15
  },
  "case-study": {
    key: 1,
    title: "Hospice Admission to Discharge",
    length: 27
  },
  "fall-prevention-and-post-fall-visit": {
    key: 1,
    title: "Fall Prevention",
    length: 34
  },
  "communication-techniques": {
    key: 1,
    title: "Communication Techniques",
    length: 38
  },
  "role-of-the-idg": {
    key: 1,
    title: "Inter Disciplinary Group",
    length: 17
  },
  "idg-experience-model": {
    key: 1,
    title: "Inter Disciplinary Grou",
    length: 24
  },
  "duties-of-the-hospice-aide": {
    key: 1,
    title: "Duties of the Hospice Aide",
    length: 16
  },
  "personal-care-plan-of-care": {
    key: 1,
    title: "Personal Care/Hospice Aide Plan of Care",
    length: 42
  },
  "discharges-revocations-transfers": {
    key: 1,
    title: "Discharges, Revocations, and Transfers",
    length: 15
  }
};

export default function SlidePage({ match }) {
  const slide = get(slidesLookup, match.params.id);

  return (
    <div>
      <Navigation />
      <SlideContainer slide={slide} />
    </div>
  );
}
