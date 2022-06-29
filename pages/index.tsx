import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Git Flow Example</title>
      </Head>

      <main className={styles.main}>
        <h2>Git Flow Example - With Hotfix</h2>
        <ul>
          <li>Add feature 1</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
