import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  const router = useRouter();
  

  return (
    <div>
       <div className={styles.header}>
 
         <h1 className={styles.logo}>Pixieverse</h1>
 
        <nav>
          <ul className={styles.nav__links}>
            <li>
              
              <Link href="/"><a>home</a></Link>
            </li>
            <li>
              <Link href="/mint"><a>Mint</a></Link>
            </li>
            <li>
              <Link href="/stake"><a>Stake</a></Link>
            </li>
            <li>
              <Link href="/#road"><a>Roadmap</a></Link>
            </li>
            <li>
              <Link href="/#social"><a>Social</a></Link>
            </li>
          </ul>
        </nav>
 
        
 
    </div>
                   
    <div className={styles.container}>
    
      <img src={`/gg.gif`} alt="drop" width="100%" height="50%" className={styles.radius} />
       
          <img src={`/pix.png`} alt="drop" width="100%" height="100%" />
        <p className={styles.textm}>
          10,000 unique collectible characters with proof of ownership stored on the Polygon blockchain. The project that inspired the modern CryptoArt movement.
        </p> <div id="road">
        <img src={`/road.png`} alt="drop" width="100%" height="100%" />
        <img src={`/rop.png`} alt="drop" width="100%" height="100%" />
      </div>
      {/* Top Section */}
      
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/drop.webp`} alt="drop" />
            <img src={`/mint.png`} alt="drop" width="100%" height="100%" />
            <p className={styles.selectBoxDescription}>
              The PixieVerse NFTs are 10,000 uniquely generated characters. No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain,
Each NFT can be staked to earn the ERC20 PIXIECOIN which will be used as the official currency for the Pixie Ecosystem, which will consist of numerous beneficial DAPPS. .
            </p>
          <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          
        >
         Mint NFT
        </button>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.webp`} alt="drop" />
          <img src={`/stake.png`} alt="drop" width="100%" height="100%" />
          <p className={styles.selectBoxDescription}>
            You can stake your NFTS to earn PIXIECOIN, the official token of the pixieverse ecosystem, the token will be used to vote on our DAO, use as LP token on our DEX(comming soon!) all also it will be used as the offical currency for our play to earn games and dapps.
          </p>
          <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          
        >
          Stake NFT
        </button>
        </div>
      </div>
      <img src={`/gallery.png`} alt="drop" width="100%" height="100%" />
      <img src={`/photos.png`} alt="drop" width="100%" height="100%" />
      <div id="social">
      <img src={`/social.png`} alt="drop" width="100%" height="100%" />
        <Link href="/telegram.com"><a><img src={`/tel.gif`} alt="drop" width="50%" height="100%" /></a></Link>
         <Link href="/discord.com"><a><img src={`/tel.gif`} alt="drop" width="50%" height="100%" /></a></Link>
      </div>
    </div>
    
      </div>
  );
};

export default Home;
