import { items } from "/public/opp.json";
import Carousel from "react-elastic-carousel";
import styles from "./embla.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];
export default function ElasticCarousel() {
  const {elastic} = items;
  return (
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints}>
          {elastic.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage:`url(${item.imageUrl})` }}
            >
              <div className={styles.title}>
                <h3>{item.title} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
  );
}