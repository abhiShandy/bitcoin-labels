import SidebarLayout from "../components/SidebarLayout";
import React from "react";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
import FeatureList from "../components/FeatureList";

export default function About() {
  return (
    <>
      <Head>
        <title>About Bitcoin Labels</title>
      </Head>
      <SidebarLayout title="About">
        <div className="flex flex-col gap-4">
          <p>
            An open-source project to privately label your Bitcoin transactions.
          </p>
          <div>
            <p className="font-semibold mb-2">Features:</p>
            <FeatureList version="v0.3">
              <li>Add a label to Bitcoin address</li>
            </FeatureList>
            <FeatureList version="v0.2">
              <li>
                Check status and balance of the associated addresses using a
                trusted mempool.space instance
              </li>
            </FeatureList>
            <FeatureList version="v0.1">
              <li>Generate bc1 addresses from a zpub till a given depth</li>
            </FeatureList>
          </div>
          <p>Built by Abhishek Shandilya.</p>
          <p>
            Report issues and share feedback on{" "}
            <ExternalLink href="https://github.com/abhiShandy/bitcoin-labels/issues">
              GitHub
            </ExternalLink>
            .
          </p>
        </div>
      </SidebarLayout>
    </>
  );
}
