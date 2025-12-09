import styles from "./FeatureTimeline.module.css";
import { STATIC_BASE_URL } from "@/utils/apiUtil";

interface Feature {
  period: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureTimelineProps {
  features: Feature[];
}

export default function FeatureTimeline({ features }: FeatureTimelineProps) {
  return (
    <div className={styles.timeline}>
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div key={index} className={styles.timelineItem}>
            {/* 왼쪽 영역 */}
            <div className={`${styles.timelineSide} ${styles.leftSide}`}>
              {isEven ? (
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod}>{feature.period}</div>
                  <div className={styles.timelineCard}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ) : (
                <div className={styles.timelineImageWrapper}>
                  <img src={`${STATIC_BASE_URL}${feature.image}`} alt={feature.title} className={styles.timelineImage} />
                </div>
              )}
            </div>

            {/* 가운데 선 */}
            <div className={styles.timelineMarker}>
              {index < features.length - 1 && <div className={styles.timelineLine}></div>}
            </div>

            {/* 오른쪽 영역 */}
            <div className={`${styles.timelineSide} ${styles.rightSide}`}>
              {isEven ? (
                <div className={styles.timelineImageWrapper}>
                  <img src={`${STATIC_BASE_URL}${feature.image}`} alt={feature.title} className={styles.timelineImage} />
                </div>
              ) : (
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod}>{feature.period}</div>
                  <div className={styles.timelineCard}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}