import { useState } from "react";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { Divider } from "../components/Divider";
import { getAdvice, Data } from "../services/getAdvice";

import iconDice from "../../public/images/icon-dice.svg";

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
        <div className="relative w-6 h-6">
          <Image src={iconDice} alt="Genereitor Advice button" layout="fill" />
        </div>
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
