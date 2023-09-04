import styles from "../main-influences.module.css";
import { useEffect, useState } from "react";

function Ranking(props) {
  const [rankingType, setRankingType] = useState("#");

  return (
    <div className={styles.ranking}>
      {typeof props.positionTunnel === "number" ? rankingType : ""}
      {props.positionTunnel}
    </div>
  );
}

export default Ranking;
