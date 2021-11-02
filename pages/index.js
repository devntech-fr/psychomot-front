import React from "react";
import ComingSoon from "components/ComingSoon";
import { getServerUrl } from "utils/server-info";

export default function Home({ comingSoon }) {
  return (
      <ComingSoon comingSoon={comingSoon}/>
  )
}

export async function getStaticProps(context) {
  console.log('context',context);
  const response = await fetch(`${getServerUrl()}/coming-soon`);
  if (undefined === response) {
    console.log('response is undefined');
  }
  console.log('response',response);
  const comingSoon = await response.json();
  if (undefined === comingSoon || !comingSoon) {
    console.log('comingSoon is undefined');
  }
  console.log('comingSoon from static props',comingSoon);
  return {
    props: {comingSoon}
  }
}

