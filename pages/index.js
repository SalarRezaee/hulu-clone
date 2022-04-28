import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import request from "../utils/request";
const Home = ({ results }) => {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="stylesheet" href="/facicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: requests.results,
    },
  };
}
