import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0x0cBF1C44bc8591fc811Ad24aB27603581796800A"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.container}>
      <div
          className={styles.optionSelectBoxs}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <h2 className={styles.selectBoxTitles}>Minting Page</h2>
            
        </div>
      <p></p>
      <div
          className={styles.optionSelectBoxs}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <h2 className={styles.selectBoxTitles}>Stake Your NFTs</h2>
          
        </div>
      <h1 className={styles.h1}>PIXIEVERSE NFT!</h1>
      <div>
        <img src={`/gg.gif`} alt="drop" width="50%" height="50%" /></div>
      <p className={styles.explain}>
        The PixieVerse NFTs are 10,000 uniquely generated characters. No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain.
        The Pixies are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. Purchasing an ape costs 28 MATIC.
          </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      {!address ? (
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={() => claimNft()}
        >
          Claim An NFT
        </button>
      )}
    </div>
  );
};

export default Mint;
