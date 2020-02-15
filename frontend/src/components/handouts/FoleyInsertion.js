/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Card from "../components/Card";

export default function FoleyInsertion() {
  return (
    <div>
      <div css={title}>Foley Catheter Insertion and Care HO</div>
      <hr css={divider} />
      <div css={container}>
        <div>
          <h4 css={header}>How to Insert a Catheter (Men)</h4>
          <ol css={unordered}>
            <li>
              Assemble all equipment: catheter, lubricant, sterile gloves,
              cleaning supplies, syringe with water to inflate the balloon,
              drainage receptacle.
            </li>
            <li>
              Wash your hands. Use betadine or similar cleansing product (unless
              instructed otherwise) to clean the urethral opening.
            </li>
            <li>
              Apply the sterile gloves. Make sure you do not touch the outside
              of the gloves with your hands.
            </li>
            <li>Lubricate the catheter.</li>
            <li>
              Hold the penis on the sides, perpendicular to the body. Stretch
              the penis away from the body.
            </li>
            <li>Begin to gently insert and advance the catheter.</li>
            <li>
              You will meet resistance when you reach the level of the external
              sphincter. Try to relax by deep breathing, and continue to advance
              the catheter.
            </li>
            <li>
              Once the urine flow starts, continue to advance the catheter to
              the level of the "Y" connector. Hold the catheter in place while
              you inflate the balloon. Some men have developed urethral injuries
              due to the balloon being inflated in the urethra. Care must be
              taken to ensure the catheter is in the bladder. You may try to
              irrigate the catheter with a few ounces of sterile water. If the
              solution does not easily return, you may not have the catheter far
              enough in the bladder.
            </li>
            <li>Secure the catheter, and attach the drainage bag.</li>
          </ol>

          <h4 css={header}>How to Insert a Catheter (Women)</h4>
          <ol css={unordered}>
            <li>
              Assemble all equipment: catheter, lubricant, sterile gloves,
              cleaning supplies, syringe with water to inflate the balloon,
              drainage receptacle.
            </li>
            <li>
              Wash your hands. Use betadine or similar cleansing product (unless
              instructed otherwise) to clean the urethral opening.
            </li>
            <li>
              Apply the sterile gloves. Make sure you do not touch the outside
              of the gloves with your hands.
            </li>
            <li>Lubricate the catheter.</li>
            <li>
              Spread the labia and locate the meatus (opening which is located
              below the clitoris and above the vagina ).
            </li>
            <li>Slowly insert the catheter into the meatus.</li>
            <li>Begin to gently insert and advance the catheter.</li>
            <li>
              Once the urine flow starts, advance the catheter another 2 inches.
              Hold the catheter in place while you inflate the balloon. Care
              must be taken to ensure the catheter is in the bladder. If pain is
              felt which inflating the balloon, stop; deflate the balloon;
              advance the catheter another 2 inches; and attempt to inflate the
              balloon again.
            </li>
            <li>Secure the catheter, and attach the drainage bag.</li>
          </ol>
          <h4 css={header}>How to care for your Catheter</h4>
          <p>
            Most experts advise against routine changing (replacing) of the
            catheters. If the catheter is clogged (obstructed), painful, or
            infected it may require immediate replacement. Routine care of the
            indwelling catheter MUST include daily cleansing of the urethral
            area (where the catheter exits the body) and the catheter itself
            with soap and water. The area should also be thoroughly cleansed
            after all bowel movements to prevent infection. Experts no longer
            recommend using antimicrobial ointments around the catheter as they
            have not been shown to actually reduce infections. You should
            increase your fluid intake, unless you have a medical condition
            prohibiting large amounts of fluid intake, to reduce the risk of
            developing complications. You should discuss this issue with your
            health care provider. The drainage bag must always stay lower than
            the bladder to prevent a back flow of urine back up into the
            bladder. The drainage device should be emptied at least every eight
            hours, or when the device is full. Care must be taken to keep the
            outlet valve from becoming infected. Wash your hands before and
            after handling the drainage device. Do not allow the outlet valve to
            touch anything. If the outlet becomes obviously dirty, it should be
            cleaned with soap and water.
          </p>
          <h4 css={header}>How to remove a Catheter</h4>
          <p>
            Indwelling catheters may be removed in two ways. One method is to
            attach a small syringe to the inflation port on the side of the
            catheter. Draw out all the fluid until you are unable to withdraw
            any more fluid. Slowly pull the catheter out until it is completely
            removed. Some health care providers instruct their patients to cut
            the inflation port tubing before it reaches the main tubing of the
            catheter. After all the water has drained out, slowly pull out the
            catheter until it is completely removed. Be careful not to cut the
            catheter anywhere else. Instruct the patient / family PCG to contact
            their health care provider if: If they are unable to remove the
            catheter with only slight pulling, if they are unable to urinate
            within 8 hours after catheter removal, or if their abdomen becomes
            distended and painful.
          </p>
        </div>
      </div>
    </div>
  );
}

const container = css`
  width: 100%;
  margin: auto;
  max-width: 120vmin;
`;

// Handout Title [div]
const title = css`
  font-family: "Fira Sans", sans-serif;
  font-size: 48px;
  font-weight: 200;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
`;

const content = css`
  width: 100%;
  background-color: white;
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const header = css`
  font: 24px "Fira Sans", sans-serif;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`;

const unordered = css`
  font: 16px "Open Sans", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
