import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

const Home: NextPage = () => {
  const router = useRouter();
  

  return (
    <div>
       <div className={styles.header}>
 
         <h1 className={styles.logo}>Pixieverse</h1>
 
        <nav>
          <ul className={styles.nav__links}>
            <li>
              <FontAwesomeIcon icon={faFaceRelieved} />
              <Link href="/"><a>home</a></Link>
            </li>
            <li>
              <Link href="/mint"><a>Mint</a></Link>
            </li>
            <li>
              <Link href="/stake"><a>Stake</a></Link>
            </li>
          </ul>
        </nav>
 
        
 
    </div>
                   
    <div className={styles.container}>
      
      {/* Top Section */}
      <h1 className={styles.h1}>WELCOME TO
THE PIXIEVERSE NFT</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/drop.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
            <p className={styles.selectBoxDescription}>
              The PixieVerse NFTs are 10,000 uniquely generated characters. No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain,
Each NFT can be staked to earn the ERC20 PIXIECOIN which will be used as the official currency for the Pixie Ecosystem, which will consist of numerous beneficial DAPPS. .
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            You can stake your NFTS to earn PIXIECOIN, the official token of the pixieverse ecosystem, the token will be used to vote on our DAO, use as LP token on our DEX(comming soon!) all also it will be used as the offical currency for our play to earn games and dapps.
          </p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Home;
