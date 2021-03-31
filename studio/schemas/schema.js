import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blogPost from "./blogPost";
import sponsor from "./sponsor";
import intro from "./intro";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([intro, blogPost, sponsor]),
});
