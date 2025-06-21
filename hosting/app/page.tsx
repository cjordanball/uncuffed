'use client';
import Image from 'next/image';
import { DataContextProvider } from '/home/user/uncuffed/src/store/data-context';
import uncuffed from '/home/user/uncuffed/public/images/uncuffed.svg';
import styles from './page.module.css';
import { MainGrid } from '/home/user/uncuffed/src/components/mainGrid';
import { Instructions } from '/home/user/uncuffed/src/components/instructions';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src={uncuffed} fill alt="background" className={styles.image}  />
				</div>
				<div className={styles.overlay}>
					<Instructions />
					<MainGrid />
				</div>
			</div>
		</DataContextProvider>
	);
};