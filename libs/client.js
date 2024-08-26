import {createClient} from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "i9y24bb40b",
  apiKey: process.env.MICROCMS_API_KEY,
});

