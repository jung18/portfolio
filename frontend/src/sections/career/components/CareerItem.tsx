import { BuildingIcon } from './icons/BuildingIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import styles from './CareerItem.module.css';

interface CareerItemData {
  title: string;
  date: string;
  issue: string;
}

interface CareerItemProps {
  data: CareerItemData;
  isLast: boolean;
}

export function CareerItem({ data, isLast }: CareerItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{data.title}</h3>
        </div>
        
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <BuildingIcon />
            <span className={styles.detailText}>{data.issue}</span>
          </div>
          
          <div className={styles.detailItem}>
            <CalendarIcon />
            <span className={styles.detailText}>{data.date}</span>
          </div>
        </div>
      </div>
      
      {!isLast && <div className={styles.divider} />}
    </div>
  );
}