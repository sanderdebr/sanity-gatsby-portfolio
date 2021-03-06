import React from "react";

import Layout from "./src/containers/layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
