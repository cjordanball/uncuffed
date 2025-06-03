'use clien';
import { DataContext, DataContextProvider } from '../src/store/data-context';
import { MainGrid } from '../src/components/mainGrid';
import styles from './page.module.css';

export default function Page() {
	return (
		<DataContextProvider>
			<div className={styles.test}>
				<MainGrid />
				<h1>TEST</h1>
			</div>
		</DataContextProvider>
	);
}
