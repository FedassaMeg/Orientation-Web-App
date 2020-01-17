/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Card from "../components/Card";

export default function Oximetry() {
  return (
    <div>
      <div css={title}>Practical Applications of Pulse Oximetry</div>
      <hr css={divider} />
      <div css={container}>
        <div css={content}>
          <h4 css={header}>Dr. E. Hill, Dr. MD Stoneham</h4>
          <h6 css={header}>
            Nuffield Department of Anesthetics, Oxford Radcliffe NHS Hospitals
            Headington, Oxford OX3 9DU
          </h6>
          <h4 css={header}>Introduction</h4>
          <p>
            Pulse oximetry is a useful method of monitoring patients in many
            circumstances, and in the face of limited resources, the pulse
            oximeter may represent a wise choice of monitor, as with training it
            allows for the assessment of several different patient parameters.
            Pulse oximeters are now a standard part of perioperative monitoring
            which give the operator a non-invasive indication of the patient's
            cardio-respiratory status. Having been successfully used in
            intensive care, the recovery room and during anaesthesia, they have
            been introduced in other areas of medicine such as general wards
            apparently without staff undergoing adequate training in their
            use(1). The technique of pulse oximetry does have pitfalls and
            limitations and it is possible that patient safety may be
            compromised with untrained staff. This article is therefore intended
            for the 'occasional' user of pulse oximetry.
          </p>
          <p>
            Pulse oximeters measure the arterial oxygen saturation of
            hemoglobin. The technology involved(2) is complicated but there are
            two basic physical principles. First, the absorption of light at two
            different wavelengths by hemoglobin differs depending on the degree
            of oxygenation of haemoglobin. Second, the light signal following
            transmission through the tissues has a pulsatile component,
            resulting from the changing volume of arterial blood with each pulse
            beat. This can be distinguished by the microprocessor from the
            non-pulsatile component resulting from venous, capillary and tissue
            light absorption.
          </p>
          <p>
            The function of a pulse oximeter is affected by many variables,
            including: ambient light; shivering; abnormal hemoglobins; pulse
            rate and rhythm; vasoconstriction and cardiac function. A pulse
            oximeter gives no indication of a patient's ventilation, only of
            their oxygenation, and thus can give a false sense of security if
            supplemental oxygen is being given. In addition, there may be a
            delay between the occurrence of a potentially hypoxic event such as
            respiratory obstruction and a pulse oximeter detecting low oxygen
            saturation. However, oximetry is a useful non-invasive monitor of a
            patient's cardio-respiratory system, which has undoubtedly improved
            patient safety in many circumstances.
          </p>
          <h4 css={header}>What does a pulse oximeter measure? </h4>
          <ol css={unordered}>
            <li>
              The oxygen saturation of hemoglobin in arterial blood - which is a
              measure of the average amount of oxygen bound to each hemoglobin
              molecule. The percentage saturation is given as a digital readout
              together with an audible signal varying in pitch depending on the
              oxygen saturation.
            </li>
            <li>
              The pulse rate - in beats per minute, averaged over 5 to 20
              seconds.
            </li>
            <li>
              A pulse oximeter gives no information on any of these other
              variables:
            </li>
            <li>The oxygen content of the blood </li>
            <li>The amount of oxygen dissolved in the blood </li>
            <li>The respiratory rate or tidal volume i.e. ventilation </li>
            <li>The cardiac output or blood pressure </li>
          </ol>
          <h4 css={header}>Principles of Modern Pulse Oximetry</h4>
          <p>
            Oxygen is carried in the bloodstream mainly bound to hemoglobin. One
            molecule of hemoglobin can carry up to four molecules of oxygen,
            which is then 100% saturated with oxygen. The average percentage
            saturation of a population of hemoglobin molecules in a blood sample
            is the oxygen saturation of the blood. In addition, a very small
            quantity of oxygen is carried dissolved in the blood, which can
            become important if the hemoglobin levels are extremely low. The
            latter, however, is not measured by pulse oximetry.
          </p>
          <p>
            A pulse oximeter consists of a peripheral probe, together with a
            microprocessor unit, displaying a waveform, the oxygen saturation
            and the pulse rate. Most oximeters also have an audible pulse tone,
            the pitch of which is proportional to the oxygen saturation - useful
            when one cannot see the oximeter display. The probe is placed on a
            peripheral part of the body such as a digit, ear lobe or the nose.
            Within the probe are two light emitting diodes (LED's), one in the
            visible red spectrum (660nm) and the other in the infrared spectrum
            (940nm). The beams of light pass through the tissues to a
            photodetector. During passage through the tissues, some light is
            absorbed by blood and soft tissues depending on the concentration of
            hemoglobin. The amount of light absorption at each light frequency
            depends on the degree of oxygenation of hemoglobin within the
            tissues.
          </p>
          <h4 css={header}>PRACTICAL APPLICATIONS OF PULSE OXIMETRY</h4>
          <p>
            The microprocessor can select out the absorbance of the pulsatile
            fraction of blood, i.e. that due to arterial blood, from constant
            absorbance due to non-pulsatile venous or capillary blood and other
            tissue pigments. Several recent advances in microprocessor
            technology have reduced the effects of interference on pulse
            oximeter function. Time division multiplexing, whereby the LED's are
            cycled: red on, then infrared on, then both off, many times per
            second, helps to eliminate background 'noise'. Quadrature division
            multiplexing is a further advance in which the red and infrared
            signals are separated in phase rather than time and then recombined
            in phase later. In this way, an artefact due to motion or
            electromagnetic interference may be eliminated since it will not be
            in the same phase of the two LED signals once they are recombined.
          </p>
          <p>
            Saturation values are averaged out over 5 to 20 seconds. The pulse
            rate is also calculated from the number of LED cycles between
            successive pulsatile signals and averaged out over a similar
            variable period of time, depending on the particular monitor.
          </p>
          <p>
            From the proportions of light absorbed at each light frequency, the
            microprocessor calculates the ratio of the two. Within the oximeter
            memory is a series of oxygen saturation values obtained from
            experiments performed in which human volunteers were given
            increasingly hypoxic mixtures of gases to breath. The microprocessor
            compares the ratio of absorption at the two light wavelengths
            measured with these stored values, and then displays the oxygen
            saturation digitally as a percentage and audibly as a tone of
            varying pitch. As it is unethical to desaturate human volunteers
            below 70%, it is vital to appreciate that oxygen saturation values
            below 70% obtained by pulse oximetry are unreliable.
          </p>
          <p>
            Reflection pulse oximetry uses reflected rather than transmitted
            light on a single-sided monitor. It can therefore be used more
            proximally anatomically e.g. forehead, bowel, although it may be
            difficult to secure. Other than using specific reflection spectra,
            the principles are the same as for transmission oximetry.
          </p>
          <h4 css={header}>
            Practical tips to the successful use of pulse oximetry:
          </h4>
          <ol css={unordered}>
            <li>
              Select the probe you require with particular attention to correct
              sizing and where it is going to go. The digit should be clean
              (remove nail varnish).
            </li>

            <li>
              Position the probe on the chosen digit, avoiding excess force.
            </li>
            <li>
              Allow several seconds for the pulse oximeter to detect the pulse
              and calculate the oxygen saturation.
            </li>
            <li>
              Look for a displayed waveform. Without this, any reading is
              meaningless.
            </li>
            <li>
              Check irrigant solution for expiration date. Use only unexpired
              solutions.
            </li>
            <li>
              Read off the displayed oxygen saturation and pulse rate.
              <em>
                * Be cautious interpreting figures where there has been an
                instantaneous change in saturation - for example 99% falling
                suddenly to 85%. This is physiologically not possible.
              </em>
            </li>
            <li>
              If in doubt:
              <em>
                rely on your clinical judgement, rather than the value the
                machine gives.
              </em>
            </li>
          </ol>
          <h4 css={header}>Limitations:</h4>
          <p>
            The oximeter reading is a measure solely of oxygenation, not of
            ventilation, and is not a substitute for blood gases checked in a
            laboratory as it gives no indication of carbon dioxide levels, blood
            PH, or sodium bicarbonate levels. The metabolism of oxygen can be
            readily measured by monitoring expired CO2.
          </p>
          <p>
            Falsely low readings may be caused by hypoperfusion of the
            extremeity being used for moniotring (often due to the part being
            cold or from vasoconstriction secondary to the use of vasopressor
            agents); incorrect sensor application; highly calloused skin: and
            movement (such as shivering), especially during hypoperfusion. To
            ensure accuracy the sensor should return a steady pulse and or pulse
            waveform. Falsely high or falsely low readings will occur when
            hemoglobin is bound to something other than oxygen,. In cases of
            carbon monoxide poisoning, the Falsely high reading may delay the
            recognition of hypoxia (low blood oxygen level). Cyanide poisoning
            can also give a false high reading.
          </p>
          <p>
            It should be noted that pulse oximetry only reads the percentage of
            bound hemoglobin. It can be bound to other gases such as carbon
            monoxide and still read high even thought the patient is hypoxic.
          </p>
          <h4 css={header}>MEDICARE REIMBURSEMENT:</h4>
          <p>
            Medicare will approve the use and reimburse for oxygen when the
            arterial P02 is at or below 55 or the arterial saturation is at or
            below 88% taken at rest while awake.
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
