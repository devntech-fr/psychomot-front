import React from "react";
import ComingSoon from "components/ComingSoon";

export default function Home({ comingSoon }) {
  console.log('comingSoon',comingSoon);
  return (
      <ComingSoon comingSoon={comingSoon}/>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:1337/coming-soon`);
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
