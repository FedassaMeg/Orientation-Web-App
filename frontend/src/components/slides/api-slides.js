import client from "../utils/api-client";

function getSlides() {
  return client(`/slides`);
}

export { getSlides };
