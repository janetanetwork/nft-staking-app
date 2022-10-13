import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <nav className={navbar}>
      <div className={navbar-container}>
        <div className={navbar-brand}>
          <a href="#">
            <h1>PIXIEVERSE</h1>
          </a>
        </div>
          
          <ul class="navbar-nav-left">
          <li>
            <a href="#">Mint</a>
          </li>
          <li>
            <a href="#">Stake</a>
          </li>
        </ul>
          
          <ul className={navbar-nav-right}>
          <li><button className={btn btn-dark-outline}>Mint</button></li>
          <li><button className={btn btn-dark}>Road Map</button></li>
        </ul>
      </div>
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
  );
};

export default Home;
