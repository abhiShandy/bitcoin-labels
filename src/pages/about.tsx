import SidebarLayout from "../components/SidebarLayout";
import React from "react";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
import { ExclamationIcon } from "@heroicons/react/outline";

export default function About() {
  return (
    <>
      <Head>
        <title>About Bit-Table</title>
      </Head>
      <SidebarLayout title="About">
        <div className="flex flex-col gap-4">
          <p>An open-source project to account for every transaction.</p>
          <div>
            <p>Features:</p>
            <ol className="list-decimal ml-6">
              <li>
                Generate bc1 addresses from a zpub till a given depth (v0.1.0)
              </li>
            </ol>
          </div>
          <p>Built by Abhishek Shandilya.</p>
          <p>
            Report issues and share feedback on{" "}
            <ExternalLink href="https://github.com/abhiShandy/bit-table/issues">
              GitHub
            </ExternalLink>
            .
          </p>
          <p>
            Frontend is hosted on{" "}
            <ExternalLink href="https://vercel.com/abhishandy">
              Vercel
            </ExternalLink>
            .
          </p>
        </div>
      </SidebarLayout>
    </>
  );
}
