import Image from 'next/image';
import uncuffed from '../../../public/images/uncuffed.jpg';
import styles from './imageContainer.module.css';

export const ImageContainer = () => {
	return (
		<div className={styles.imageContainer}>
			<Image
				priority
				alt='uncuffed background'
				src={uncuffed}
				className={styles.image}
			/>
		</div>
	);
};
