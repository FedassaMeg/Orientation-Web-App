/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { Card, CardImg } from "reactstrap";

export default function Slide(props) {
  let slides = props.array.map((slide, index) => {
    return (
      <div key={index}>
        <h6># {slide}</h6>
        <button onClick={() => props.goToIndex(index)} css={button}>
          <Card>
            <CardImg
              top
              width="100%"
              src={require(`../../imgs/slides/slide${props.id}/Slide${slide}.PNG`)}
              alt="slides"
            />
          </Card>
        </button>
        <br />
      </div>
    );
  });

  return <div css={container}>{slides}</div>;
}

const button = css`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: none;
`;

const container = css`
  min-width: 200px;
  max-width: 300px;
  height: 790px;
  overflow-y: scroll;
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
`;
