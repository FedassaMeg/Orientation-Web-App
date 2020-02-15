import { useState, useEffect } from "react";

export default function ChangingProgressProvider(props) {
  const { children, values, interval = 1000 } = props;

  const initialState = {
    valuesIndex: 0
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const intervalInstance = setInterval(() => {
      setState({
        valuesIndex: (state.valuesIndex + 1) % values.length
      });
    }, interval);

    return () => {
      clearInterval(intervalInstance);
    };
  }, []);

  return children(values[state.valuesIndex]);
}
