import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState } from "react";

import { Divider } from "../components/Divider";
import { getAdvice, Data } from "../services/getAdvice";

const Home: NextPage = ({
  props,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [data, setData] = useState<Data>(props);

  const handleClick = () => {
    getAdvice().then((item) => setData(item));
  };

  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <meta
          name="description"
          content="This is a solution to the Advice generator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects."
        />
      </Head>
      <h2
        className="uppercase text-sm
       tracking-[.3em] text-neon-green "
      >
        advice #{data?.slip?.id}
      </h2>
      <h1 className="text-3xl text-light-cyan font-extrabold font-manrope">
        {data?.slip?.advice}
      </h1>
      <Divider />
      <button name="advice" className="btn" onClick={handleClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await getAdvice();
  return {
    props: {
      props,
    },
  };
};

export default Home;
