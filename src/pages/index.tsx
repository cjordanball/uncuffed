'use clien';
import { DataContextProvider } from '../store/data-context';
import { MainGrid } from '../components/mainGrid';
import { Instructions } from '../components/instructions';
import styles from './page.module.css';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.overlay}>
				<div className={styles.heading}>
					<h1 className={styles.title}>Uncuffed</h1>
					<span className={styles.subtitle}>Red Flag Bingo</span>
				</div>
				<Instructions />
				<div className={styles.container}>
					<MainGrid />
				</div>
			</div>
		</DataContextProvider>
	);
}
