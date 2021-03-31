import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import Section from "../containers/section";
import { mapEdgesToNodes } from "../helpers";
import Intro from "../sections/intro";

const HomePage = ({ data }) => {
  const siteSettings = mapEdgesToNodes(data.allSanitySiteSettings);

  return (
    <>
      <SEO
        title={siteSettings.title}
        description={siteSettings.description}
        keywords={siteSettings.keywords}
      />
      <Section title="intro">
        <Intro />
      </Section>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query IndexQuery {
    allSanitySiteSettings {
      edges {
        node {
          title
          description
          Keywords
        }
      }
    }
  }
`;
