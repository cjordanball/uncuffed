import styles from './footer.module.css';
import Image from 'next/image';
import Up from '../../../public/images/up.svg';
import Down from '../../../public/images/down.svg';

export const Footer = () => (
	<div className={styles.container}>
		<div className={styles.colorSection}>
			<div className={`${styles.colorBlock} ${styles.colorGreen}`}>
				<Up className={styles.icon} alt='Happened to me' />
			</div>
		</div>
		<span>Happened to me!</span>
		<div className={styles.colorSection}>
			<div className={`${styles.colorBlock} ${styles.colorRed}`}>
				<Down className={styles.icon} alt='Yeh, I did it!' />
			</div>
		</div>
		<span>I did it!</span>
		<div className={styles.colorSection}>
			<div
				className={`${styles.colorBlock} ${styles.doubleIcon} ${styles.colorYellow}`}
			>
				<Up className={styles.icon} alt='Happened to me' />
				<Down className={styles.icon} alt='Yeh, I did it!' />
			</div>
		</div>
		<span>I&apos;ve given and gotten!</span>
	</div>
);
