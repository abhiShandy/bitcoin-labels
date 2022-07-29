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
          <p className="text-orange-500 flex">
            <ExclamationIcon className="h-6" />
            This project is work in progress.
          </p>
          <p>An open-source project to account for every transaction.</p>
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
            </ExternalLink>{" "}
            and backend is hosted on{" "}
            <ExternalLink href="https://aws.amazon.com/">AWS</ExternalLink>.
          </p>
        </div>
      </SidebarLayout>
    </>
  );
}
