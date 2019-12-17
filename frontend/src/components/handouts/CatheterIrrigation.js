/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Card from "../components/Card";

export default function CatheterIrrigation() {
  return (
    <div>
      <div css={title}>Irrigation of Indwelling Urinary Catheter</div>
      <hr css={divider} />
      <Card>
        <div css={content}>
          <h4>Policy:</h4>
          <p>
            Hospice nurses will perform irrigation of indwelling urinary
            catheters according to physician orders. Caregivers will be
            instructed to perform this technique when indicated. When possible,
            3-way urinary catheters may be placed to allow for closed system
            irrigation.
          </p>
          <h4>Purpose:</h4>
          <ol>
            <li>
              To maintain catheter patency and urinary drainage by flushing
              sediment through tubing.
            </li>
            <li>
              To soothe irritated bladder tissue by diluting concentrated urine.
            </li>
            <li>
              To administer therapeutic or antibacterial treatments to the
              bladder.
            </li>
          </ol>
          <h4>Procedure:</h4>
          <p>Equipment required:</p>
          <ul>
            <li>
              irrigation solution (sterile saline) as ordered by physician
            </li>
            <li>sterile irrigation tray with 50cc catheter tip syringe</li>
            <li>alcohol wipes</li>
            <li>sterile gloves</li>
            <li>waterproof pad</li>
          </ul>
          <ol>
            <li>
              Verify physician’s order for irrigation of indwelling catheter,
              including specific orders for type of irrigant, amount of irrigant
              (recommend 100cc to flush sediment), indications for and frequency
              of irrigation.
            </li>

            <li>
              Explain the order for irrigation and the procedure to the patient
              obtaining consent to proceed.
            </li>
            <li>Wash hand thoroughly, dry well.</li>
            <li>Provide for privacy.</li>
            <li>
              Check irrigant solution for expiration date. Use only unexpired
              solutions.
            </li>
            <li>
              If solution has been in refrigerator, warm it to room temperature
              before irrigating.
            </li>
            <li>Place waterproof pad under patient and catheter.</li>
            <li>
              Open irrigation tray and pour desired amount of irrigant into
              container. Recap irrigant.
            </li>
            <li>Open two alcohol swabs.</li>
            <li>Put on sterile gloves.</li>
            <li>Fill 50cc syringe with measured amount of irrigant.</li>
            <li>
              Clean juncture of indwelling catheter and drainage tube, or
              irrigation port if available with alcohol swab. (It is not advised
              that sampling port be used for irrigation.)
            </li>
            <li>
              For single lumen urinary catheter, disconnect catheter and
              drainage tubing taking care not to put tension on the catheter.
              Hold both in non-dominant hand.
            </li>
            <li>
              Insert catheter-tip syringe filled with irrigant into distal end
              of catheter or into irrigation port.
            </li>
            <li>
              Instill solution slowing into urinary catheter. Do not pull back
              on syringes.
            </li>
            <li>
              If resistance is met, discontinue irrigation procedure and prepare
              to insert a replacement catheter. (Be sure catheter is not
              kinked.) Consult with office if difficulties arise
            </li>
            <li>
              Remove syringe after instilling irrigant, wipe catheter end with
              alcohol, reattach drain bag and allow solution to drain. If
              necessary, attach a new drain bag. Remove gloves.
            </li>
            <li>
              Dispose of waste materials and used underpad in plastic bag.
              Dispose of safely.
            </li>
            <li>
              Document time and date of procedure, type and amount of irrigant
              used, characteristics of urine returned, difficulty of irrigation,
              patient complaints during and after procedure, and the outcome of
              the procedure.
            </li>
            <li>Procedure may be modified by specific physician’s orders.</li>
            <li>
              To maintain catheter patency and urinary drainage by flushing
              sediment through tubing.
            </li>
          </ol>
          <p>
            Source: Bulau, Judith M. (1986). Clinical Policies and Procedures
            for Home Health Care. Gaithersburg, MD: Aspen Publishers. Revised
            Information: Bard Urological Division, Covington, GA 1-800-526-4455
          </p>
        </div>
      </Card>
    </div>
  );
}

const container = css``;

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
