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
    key: 2,
    title: "Message System",
    length: 83
  },
  "introduction-to-hospice": {
    key: 3,
    title: "Introduction to Hospice",
    length: 39
  },
  "admission-handbook": {
    key: 4,
    title: "Admission Handbook",
    length: 35
  },
  "hospice-in-care-facilities": {
    key: 5,
    title: "Hospice in Care Facilities",
    length: 29
  },
  "patients-rights": {
    key: 6,
    title: "Patient's Rights",
    length: 15
  },
  "case-study": {
    key: 7,
    title: "Hospice Admission to Discharge",
    length: 27
  },
  "fall-prevention-and-post-fall-visit": {
    key: 8,
    title: "Fall Prevention",
    length: 34
  },
  "communication-techniques": {
    key: 9,
    title: "Communication Techniques",
    length: 38
  },
  "role-of-the-idg": {
    key: 10,
    title: "Inter Disciplinary Group",
    length: 17
  },
  "idg-experience-model": {
    key: 11,
    title: "Inter Disciplinary Grou",
    length: 24
  },
  "duties-of-the-hospice-aide": {
    key: 12,
    title: "Duties of the Hospice Aide",
    length: 16
  },
  "personal-care-plan-of-care": {
    key: 13,
    title: "Personal Care/Hospice Aide Plan of Care",
    length: 42
  },
  "discharges-revocations-transfers": {
    key: 14,
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
