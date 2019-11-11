/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Modules from "../components/Modules";

export default function Slides() {
  return (
    <div>
      <div css={maincontainer}>
        <div css={pageheader}>ALL SLIDES</div>
        <hr css={divider} />
        <div css={cardscontainer}>
          <div css={moduleCard}>
            <Modules
              key="1"
              title="Module 1"
              subtitle="Introduction to First Call"
              list={[
                {
                  title: "Introduction to First Call Hospice",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRAtsEed7TdA44S5?e=jLWgfh"
                }
              ]}
              type="slide"
            />
          </div>
          {/* <div css={moduleCard}>
            <Modules
              key=""
              title="Module 2"
              subtitle="Competencies"
              list={[
                { title: "Foley Catheter Handouts" },
                { title: "Oximetry Handout" },
                { title: "Venipuncture Handout" }
              ]}
              type="slide"
            />
          </div> */}
          <div css={moduleCard}>
            <Modules
              key="2"
              title="Module 3"
              subtitle="Electronic Medical Record"
              list={[
                {
                  title: "Message System",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRFr6feBD6lsVzVA?e=kyiff7"
                }
              ]}
              type="slide"
            />
          </div>

          <div css={moduleCard}>
            <Modules
              key="3"
              title="Module 4"
              subtitle="Introduction to Hospice"
              list={[
                {
                  title: "Introduction to Hospice",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gR3XNAR54RT_953V?e=D01yFI"
                },
                {
                  title: "Admission Handbook",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRLhu5gwQHj5ZnHb?e=XiOkcb"
                },
                {
                  title: "Hospice in Care Facilities",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRSDIlcpBLiIBIWm?e=gB3crX"
                },
                {
                  title: "Patient's Rights",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRORHLRk1zFzKp4g?e=nchgPy"
                },
                {
                  title: "Case Study",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRVeQ5lSMuzFIl6O?e=zKAyC6"
                },
                {
                  title: "Fall Prevention and Post Fall Visit",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRbwA0NqNbDqCOky?e=0bbyaP"
                },
                {
                  title: "Communication Techniques",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRi1sGmzejWS0UPe?e=ccs3hi"
                },
                {
                  title: "Role of the IDG",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRe2-hcbEoCOMuLT?e=6xBpeD"
                },
                {
                  title: "IDG Experience Model",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRk04FpN2_LZ-Qa3?e=Tsuj0o"
                },
                {
                  title: "Duties of the Hospice Aide",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRsE9yIFrFGsjE8U?e=u2pRUy"
                },
                {
                  title: "Self Care and Care Assignment",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRo9U5gwK-yb3IJy?e=eiFPiz"
                },
                {
                  title: "Discharges, Revocations, Transfers",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gRxs9HPkdMFXhR8y?e=wHTdbB"
                }
              ]}
              key="introductiontohospice"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              key="4"
              title="Module 5"
              subtitle="Documentation"
              list={[
                {
                  title: "Problem Oriented Charting SOCP",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gR6vrZnQsa_g7WZ3?e=4FIL6R"
                },
                {
                  title: "Visit Frequencies",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSB0izGrnO1lG7JM?e=FdbQzV"
                },
                {
                  title: "Visits SOC VR V15",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gR8M0ZiiQ24ghHDP?e=3wagbj"
                },
                {
                  title: "PRN Visit",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSEVQfgOaI3mxUIo?e=vVgSX0"
                },
                {
                  title: "24 Hour Follow-up Visits",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSL4C8j5oulkljci?e=7912Le"
                },
                {
                  title: "Pronouncement Visits",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSNrGYs4tgwtc5mQ?e=wbzX7g"
                }
              ]}
              key="documentation"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              key="5"
              title="Module 6"
              subtitle="Documenting Decline"
              list={[
                {
                  title: "Determining Hospice Eligibility",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSTxGCiMzCJLpP9T?e=wf3sJc"
                },
                {
                  title: "Measuring Decline Scales",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSa6VfWUVr-91m3C?e=67Tvao"
                },
                {
                  title: "Nutrition Documentation Decline",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSf9Ua2N6zwPXwlY?e=wDrI47"
                }
              ]}
              key="documentingdecline"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              key="6"
              title="Module 7"
              subtitle="Symptom Management"
              list={[
                {
                  title: "Cough",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSlxq3OUuTFtxsJb?e=gFfCpc"
                },
                {
                  title: "Secretions",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSp2Zq5fJbO3SERn?e=8hNfex"
                },
                {
                  title: "Nausea and Vomiting",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gSy7NFnwaIZZLkp6?e=C30M8f"
                },
                {
                  title: "Diabetes",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gS0eLDrJe9eClzFn?e=Djawp4"
                },
                {
                  title: "Constipation-Bowel Care",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gStfOwJmrnH2Alfd?e=hwSKu6"
                },
                {
                  title: "Signs of Impending Death",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTG7BP0W_sLQ5R2i?e=vKXN2X"
                },
                {
                  title: "Wound Classifications",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTkepZ6uX5GAI9Pd?e=w5770V"
                },
                {
                  title: "Wound Care Assessment",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTgD9yjIbK8q1Kdt?e=OHHaU7"
                },
                {
                  title: "Wound Identification Test",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTeoMzvZ1l-ECpmZ?e=jNRYu0"
                },
                {
                  title: "Imminent Status",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gS7RYbzA9v9gvGEb?e=JHTjrf"
                },
                {
                  title: "Meds Myths & Misconceptions",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gS9E0clrYFnw50ZW?e=fsGiFo"
                },
                {
                  title: "The Basics of Pain Management",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTD8RXgIotByJCaH?e=0ug5ne"
                },

                {
                  title: "Medication Management",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTKtbrIiHK6F3LKM?e=KhDF0O"
                },

                {
                  title: "Grief and Loss",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTN9v51FUQw93GWt?e=iiUsjc"
                },
                {
                  title: "Delerium",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTRQ7pq57_GK5q5-?e=w2a3cb"
                },
                {
                  title: "Death Anxiety",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTXhP3j13ZdSuPHC?e=6keHqK"
                }
              ]}
              key="symptommanagement"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              key="7"
              title="Module 8"
              subtitle="Plan of Care"
              list={[
                {
                  title: "Self Care Deficit",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gUw320lTF_zrONDO?e=AVizdO"
                },
                {
                  title: "Impaired Nutritional Status",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gU0aT0iXBYiKti2a?e=xsPM99"
                }
              ]}
              key="planofcare"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              key="8"
              title="Module 9"
              subtitle="On Call is a Partnership"
              list={[
                {
                  title:
                    "Best Practices for RNCMs, and Recognizing Imminent Status",
                  url:
                    "https://1drv.ms/p/s!AjOC0pQqOXz3gTtLMUbRorMEkZkD?e=VL5zQo"
                }
              ]}
              key="oncallisapartnership"
              type="slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const maincontainer = css`
  padding: 0;
  margin: auto;
  max-width: 120vmin;
  width: 100%;
`;

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #fdfdfd;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  background-color: whitesmoke;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const moduleCard = css`
  padding: 20px;
`;
