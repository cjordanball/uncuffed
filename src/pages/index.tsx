'use client';
import { DataContextProvider } from '../store/data-context';
// import { MainGrid } from '../components/mainGrid';
import Image from 'next/image';
import uncuffed from '../../public/images/uncuffed.jpg';
// import { Instructions } from '../components/instructions';
import styles from './page.module.css';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.container}>
				<Image alt='background' className={styles.image} src={uncuffed} />
				{/* <div className={styles.sheet}></div>
				<div className={styles.overlay}>
					<Instructions />
					<div className={styles.containor}>
						<MainGrid />
					</div>
				</div> */}
			</div>
		</DataContextProvider>
	);
}
