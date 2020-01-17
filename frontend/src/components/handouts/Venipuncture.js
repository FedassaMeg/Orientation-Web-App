/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Card from "../components/Card";

export default function Venipuncture() {
  return (
    <div>
      <div css={title}>Routine Venipuncture Guidelines</div>
      <hr css={divider} />
      <div css={container}>
        <div css={content}>
          <h4 css={header}>Materials</h4>
          <ol css={unordered}>
            <li>Safety Needles, 22g or less</li>
            <li>Butterfly needles. 21g or less</li>
            <li>Syringes</li>
            <li>
              Blood Collection Tubes. The vacuum tubes are designed to draw a
              predetermined volume of blood. Tubes with different additives are
              used for collecting blood specimens for specific types of tests.
              The color of the rubber stopper is used to identify these
              additives. See Selecting the Appropriate Collection Tube and
              Specimen Container Types.
            </li>
            <li>Tourniquets. Latex-free tourniquets are available</li>
            <li>
              Antiseptic. Individually packaged 70% isopropyl alcohol wipes.
            </li>
            <li>2x2 Gauze or cotton balls.</li>
            <li>
              Sharps Disposal Container. An OSHA acceptable, puncture proof
              container marked "Biohazardous".
            </li>
            <li>Bandages or tape</li>
          </ol>
          <h4 css={header}>Safety</h4>
          <ol css={unordered}>
            <li>
              Observe universal (standard) safety precautions. Observe all
              applicable isolation procedures.
            </li>
            <li>PPE's will be worn at all time.</li>
            <li>
              Wash hands in warm, running water with the chlorhexidine gluconate
              hand washing product (approved by the Infection Control
              Committee), or if not visibly contaminated with a commercial
              foaming hand wash product before and after each patient
              collection.
            </li>
            <li>
              Gloves are to be worn during all phlebotomies, and changed between
              patient collections. Palpation of phlebotomy site may be performed
              without gloves providing the skin is not broken.
            </li>
            <li>
              A lab coat or gown must be worn during blood collection
              procedures.
            </li>
            <li>
              Needles and hubs are single use and are disposed of in an
              appropriate 'sharps' container as one unit. Needles are never
              recapped, removed, broken, or bent after phlebotomy procedure.
            </li>
            <li>
              Gloves are to be discarded in the appropriate container
              immediately after the phlebotomy procedure. All other items used
              for the procedure must be disposed of according to proper
              biohazardous waste disposal policy.
            </li>
            <li>
              Contaminated surfaces must be cleaned with freshly prepared 10%
              bleach solution. All surfaces are cleaned daily with bleach.
            </li>
            <li>
              In the case of an accidental needlestick, immediately wash the
              area with an antibacterial soap, express blood from the wound, and
              contact your supervisor.
            </li>
          </ol>
          <h4 css={header}>Procedure</h4>
          <ol css={unordered}>
            <li>
              Identify the patient. Outpatients are called into the phlebotomy
              area and asked their name and date of birth. This information must
              match the requisition. Inpatients are identified by their arm
              band. If it has been removed, a nurse must install a new one
              before the patient can be drawn.
            </li>
            <li>
              Reassure the patient that the minimum amount of blood required for
              testing will be drawn.
            </li>
            <li>
              Assemble the necessary equipment appropriate to the patient's
              physical characteristics.
            </li>
            <li>Wash hands and put on gloves.</li>
            <li>
              Position the patient with the arm extended to form a straight-line
              form shoulder to wrist.
            </li>
            <li>
              Do not attempt a venipuncture more than twice. Notify your
              supervisor or patient's physician if unsuccessful.
            </li>
            <li>
              Select the appropriate vein for venipuncture. The larger median
              cubital, basilic and cephalic veins are most frequently used, but
              other may be necessary and will become more prominent if the
              patient closes his fist tightly. At no time may phlebotomists
              perform venipuncture on an artery. At no time will blood be drawn
              from the feet unless there is a specific order in the computer.
              Factors to consider in site selection:
              <ul css={unordered}>
                <li>
                  Extensive scarring or healed burn areas should be avoided
                </li>
                <li>
                  Specimens should not be obtained from the arm on the same side
                  as a mastectomy.
                </li>
                <li>Avoid areas of hematoma.</li>
                <li>
                  If an IV is in place, samples may be obtained below but NEVER
                  above the IV site.{" "}
                </li>
                <li>
                  Do not obtain specimens from an arm having a cannula, fistula,
                  or vascular graft.
                </li>
                <li>
                  Allow 10-15 minutes after a transfusion is completed before
                  obtaining a blood sample.
                </li>
              </ul>
            </li>
            <li>
              Apply the tourniquet 3-4 inches above the collection site. Never
              leave the tourniquet on for over 1 minute. If a tourniquet is used
              for preliminary vein selection, release it and reapply after two
              minutes.
            </li>
            <li>
              Clean the puncture site by making a smooth circular pass over the
              site with the 70% alcohol pad, moving in an outward spiral from
              the zone of penetration. Allow the skin to dry before proceeding.
              Do not touch the puncture site after cleaning.
            </li>
            <li>
              <ol type="a" css={unordered}>
                <li>
                  Attach the appropriate needle to the hub by removing the
                  plastic cap over the small end of the needle and inserting
                  into the hub, twisting it tight.
                </li>
                <li>Remove plastic cap over needle and hold bevel up.</li>
                <li>
                  Pull the skin tight with your thumb or index finger just below
                  the puncture site.
                </li>
                <li>
                  Holding the needle in line with the vein, use a quick, small
                  thrust to penetrate the skin and enter the vein in one smooth
                  motion.
                </li>
                <li>
                  Holding the hub securely, insert the first vacutainer tube
                  following proper order of draw into the large end of the hub
                  penetrating the stopper. Blood should flow into the evacuated
                  tube.{" "}
                </li>
                <li>
                  After blood starts to flow, release the tourniquet and ask the
                  patient to open his or her hand.
                </li>
                <li>
                  When blood flow stops, remove the tube by holding the hub
                  securely and pulling the tube off the needle. If multiple
                  tubes are needed, the proper order of draw to avoid cross
                  contamination and erroneous results is as follows:
                  <ol css={unordered}>
                    <li>Blood culture vials or bottles, sterile tubes</li>
                    <li>
                      Coagulation tube (light blue top) (Routine PT/PTT may be
                      performed if blue top is first tube collected. It may be
                      desirable to collect a second tube for other coagulation
                      assays.)
                    </li>
                    <li>
                      Serum tube with or without clot activator or silica gel
                      (Red or Gold)
                    </li>
                    <li>Heparin tube (Green top)</li>
                    <li>EDTA (Lavender top)</li>
                    <li>Glycolytic inhibitor (Gray top)</li>
                  </ol>
                </li>
                <li>
                  Each coagulation tube (light blue top) should be gently
                  inverted 4 times after being removed from the hub. Red and
                  gold tops should be inverted 5 times. All other tubes
                  containing an additive should be gently inverted 8-10 times.
                  DO NOT SHAKE OR MIX VIGOROUSLY.
                </li>
                <li>
                  Place a gauze pad over the puncture site and remove the
                  needle. Immediately apply slight pressure. Ask the patient to
                  apply pressure for at least 2 minutes. When bleeding stops,
                  apply a fresh bandage, gauze or tape.
                </li>
                <li>
                  Properly dispose of hub with needle attached into a sharps
                  container. Label all tubes with patient labels, initials, date
                  and time.
                </li>
              </ol>
            </li>
            <li>
              Venipuncture procedure using a syringe:
              <ol type="a" css={unordered}>
                <li>Place a sheathed needle or butterfly on the syringe.</li>
                <li>Remove the cap and turn the bevel up.</li>
                <li>
                  Pull the skin tight with your thumb or index finger just below
                  the puncture site.{" "}
                </li>
                <li>
                  Holding the needle in line with the vein, use a quick, small
                  thrust to penetrate the skin and vein in one motion.
                </li>
                <li>
                  Draw the desired amount of blood by pulling back slowly on the
                  syringe stopper.
                </li>
                <li>Release the tourniquet.</li>
                <li>
                  Place a gauze pad over the puncture site and quickly remove
                  the needle. Immediately apply pressure. Ask the patient to
                  apply pressure to the gauze for at least 2 minutes. When
                  bleeding stops, apply a fresh bandage, gauze or tape.
                </li>
                <li>
                  Transfer blood drawn into the appropriate tubes as soon as
                  possible using a needleless BD Vacutainer Blood Transfer
                  Device, as a delay could cause improper coagulation. Gently
                  invert tubes containing an additive 5-8 times.
                </li>
                <li>
                  Dispose of the syringe and needle as a unit into an
                  appropriate sharps container.
                </li>
              </ol>
            </li>
            <li>
              Infant/Child Phlebotomy
              <ol type="a">
                <li>Confirm the patient's identification</li>
                <li>
                  Secure patient to Papoose apparatus for stabilization if child
                  is unable to sit upright on their own.
                </li>
                <li>Assemble the required supplies</li>
                <li>
                  Select the collection site and proceed as routine phlebotomy.
                  If the child is old enough, collect blood as in an adult.
                </li>
              </ol>
            </li>
          </ol>
          <p>
            SPECIAL NOTE WHEN USING BUTTERFLY COLLECTION DEVICE: When
            coagulation tube (light blue top) will be the first tube collected,
            it is MANDATORY to collect a DISCARD light blue top first to remove
            the air from the tubing. A second light blue top can then be
            collected appropriately. Failure to collect the discard tube may
            result in specimen being rejected due to inappropriate volume.
          </p>
          <h4 css={header}>UAMS Clinical Laboratory Blood Draw Minimization</h4>
          <ol css={unordered}>
            <li>
              Increasing the number of point of care glucose and electrolyte
              testing devices which use a fingerstick sample to perform test
              instead of drawing a whole tube of blood to send to the lab.
            </li>
            <li>
              Doing a thorough search in our LIS to see if blood can be used
              from an earlier draw whenever there is an add-on test requested to
              prevent patient from being drawn again.
            </li>
            <li>
              The Clinical Lab coordinated an intradisciplinary committee to
              reduce mislabeled and unlabeled specimens to prevent patient
              redraws . The lab audits and sends out notification for corrective
              action in cases of non-compliance.
            </li>
            <li>
              Designing our LIS system to identify minimum volumes of blood to
              be drawn for all tests and print out the appropriate number of
              labels to match the different types of blood tubes to be drawn.
            </li>
            <li>
              Purchasing testing equipment in the nursery laboratory which uses
              a lesser volume of blood than previous equipment.
            </li>
            <li>
              Participating in Nursery quality control meetings weekly which
              address methods of improvement for reducing the volume of blood
              collection.
            </li>
            <li>
              Participating in the IRB to have a voice in encouraging research
              studies to be conservative in blood collection.
            </li>
            <li>
              Communicating with nurse managers and staff education to improve
              blood draw techniques to minimize hemolyzed, clotted and
              unsatisfactory specimens to prevent redraws.
            </li>
            <li>
              Assuring the competence and accuracy of phlebotomists by prompt
              communications when specimen collection problems occur and
              providing solutions and corrective action when needed.
            </li>
            <li>
              Saving blood specimens in the proper environment for the maximum
              usage time span to increase opportunities for not having to redraw
              a specimen.
            </li>
          </ol>
          <h4 css={header}>TROUBLESHOOTING HINTS FOR BLOOD COLLECTION</h4>
          <ul>
            If a blood sample is not attainable:
            <li>Reposition the needle. </li>
            <li>
              Ensure that the collection tube is completely pushed onto the back
              of the needle in the hub.
            </li>
            <li>Use another tube as vacuum may have been lost.</li>
            <li>Loosen the tourniquet. </li>
            <li>
              Probing is not recommended. In most cases, another puncture in a
              site below the first site is advised.{" "}
            </li>
            <li>
              A patient should never be stuck more than twice unsuccessfully by
              a phlebotomist. The Supervisor should be called to assess the
              patient.{" "}
            </li>
          </ul>
          <h4 css={header}>REFERENCES</h4>
          <p>
            NCCLS: Procedure for the Collection of Diagnostic Blood Specimens by
            Venipuncture; Approved Standard, Sixth Edition, Vol 27, No 26
            (H3-A6), 2007
          </p>
          <p>Neonatal Procedures: SpecColProc2003.doc</p>
          <p>Nursing Procedure Manual. Lippincott Online with addenda, 2004.</p>
          <p>
            OSHA Safety and Health Bulletin SHIB 03-10-15: Disposal of
            Contaminated Needles and Blood Tube Holders Used for Phlebotomy.
          </p>
        </div>
      </div>
    </div>
  );
}

const container = css`
  margin: auto;
  max-width: 120vmin;
  width: 100%;
`;

// Handout Title [div]
const title = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: white;
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const content = css``;

const header = css`
  font: 24px "Merriweather", serif;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
`;

const unordered = css`
  font: 20px "Merriweather", serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
