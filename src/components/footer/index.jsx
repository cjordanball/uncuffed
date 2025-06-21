import styles from './footer.module.css';
import Image from 'next/image';
import UpBlack from '../../../public/images/upBlack.svg';

export const Footer = () => (
	<div className={styles.container}>
		<div className={styles.colorSection}>
			<div className={`${styles.colorBlock} ${styles.colorGreen}`}>
				<Image src={UpBlack} className={styles.icon} alt='Happened to me' />
			</div>
		</div>
		<span>Happened to me!</span>
	</div>
);
