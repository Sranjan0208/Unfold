import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "jw0g1gnt",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk94Bqi613UfuIhtEsv1IXbD1dB9pT5b55xdKs16obBCH7XcU3wG79vX6vcxtOyISt3ZWkq0Vmfb3YoIf3vUbGXw2RgjR2CgTOH8iVDEXOtHcSeWQvdbLF36iGNIgdCkF7lTS0wDoNMUQh3epC17e9sWgk2sjJsYviME0pIU1OvMedO7F2Dw",
  useCdn: "false",
});
