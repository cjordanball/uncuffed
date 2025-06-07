'use client';
import { DataContextProvider } from '../../src/store/data-context';
import { MainGrid } from '../../src/components/mainGrid';
import styles from './page.module.css';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.container}>
				<MainGrid />
			</div>
		</DataContextProvider>
	);
}
