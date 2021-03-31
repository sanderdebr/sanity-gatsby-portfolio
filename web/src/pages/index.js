import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import Intro from "../containers/intro";
import Layout from "../containers/layout";
import Section from "../containers/section";
import { mapEdgesToNodes } from "../helpers";

const HomePage = ({ data }) => {
  const introContent = mapEdgesToNodes(data.allSanityIntro)[1];

  return (
    <Layout>
      {/* <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      /> */}
      <Section title="intro">
        <Intro />
      </Section>
      <h1>{introContent.title}</h1>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query IntroQuery {
    allSanityIntro {
      edges {
        node {
          title
        }
      }
    }
  }
`;
