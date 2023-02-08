import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const REACT_APP_SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const REACT_APP_SANITY_PROJECT_TOKEN = process.env.SANITY_API_TOKEN;

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-02",
  useCdn: true,
  token: REACT_APP_SANITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
