import styles from './footer.module.css';
import Image from 'next/image';
import UpBlack from '../../../public/images/upBlack.svg';
import DownBlack from '../../../public/images/downBlack.svg';

export const Footer = () => (
	<div className={styles.container}>
		<div className={styles.colorSection}>
			<div className={`${styles.colorBlock} ${styles.colorGreen}`}>
				<Image src={UpBlack} className={styles.icon} alt='Happened to me' />
			</div>
		</div>
		<span>Happened to me!</span>
		<div className={styles.colorSection}>
			<div className={`${styles.colorBlock} ${styles.colorRed}`}>
				<Image src={DownBlack} className={styles.icon} alt='Yeh, I did it!' />
			</div>
		</div>
		<span>I did it!</span>
		<div className={styles.colorSection}>
			<div
				className={`${styles.colorBlock} ${styles.doubleIcon} ${styles.colorYellow}`}
			>
				<Image src={UpBlack} className={styles.icon} alt='Happened to me' />
				<Image src={DownBlack} className={styles.icon} alt='Yeh, I did it!' />
			</div>
		</div>
		<span>I&apos;ve given and gotten!</span>
	</div>
);
