'use client';
import { DataContextProvider } from '../../src/store/data-context';
import { MainGrid } from '../../src/components/mainGrid';
import Image from 'next/image';
// import Uncuffed from '/images/uncuffed.jpg';
import { Instructions } from '../../src/components/instructions';
import styles from './page.module.css';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.container}>
				<Image
					alt='uncuffed background'
					src='/images/uncuffed.jpg'
					className={styles.image}
				/>
				<div className={styles.sheet}></div>
				<div className={styles.overlay}>
					<Instructions />
					<div className={styles.containor}>
						<MainGrid />
					</div>
				</div>
			</div>
		</DataContextProvider>
	);
}
