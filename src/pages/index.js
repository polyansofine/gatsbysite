import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default IndexPage;
