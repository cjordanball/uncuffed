'use client';
import { useContext } from 'react';
import Image from 'next/image';
import Up from '../../../public/images/up.svg';
import UpBlack from '../../../public/images/upBlack.svg';
// import Down from '../../../public/images/down.svg';
// import DownBlack from '../../../public/images/downBlack.svg';
import { DataContext } from '../../store/data-context';
import styles from './gridItem.module.css';

export const GridItem = ({ text, gridLocation }) => {
	const {
		itHappenedItems,
		toggleHappenedOn,
		toggleHappenedOff,
		IDidItItems,
		toggleDidItOn,
		toggleDidItOff,
	} = useContext(DataContext);

	const handleClick = (e) => {
		if (e === 'suffered') {
			if (itHappenedItems.includes(gridLocation)) {
				toggleHappenedOff(gridLocation);
			} else {
				toggleHappenedOn(gridLocation);
			}
		} else if ((e = 'did')) {
			if (IDidItItems.includes(gridLocation)) {
				toggleDidItOff(gridLocation);
			} else {
				toggleDidItOn(gridLocation);
			}
		}
	};

	const getColor = () => {
		const happ = itHappenedItems.includes(gridLocation);
		const did = IDidItItems.includes(gridLocation);
		if (happ && did) return 'itemBoth';
		if (happ) return 'itemHappened';
		if (did) return 'itemDid';
		return null;
	};

	return (
		<div onClick={() => handleClick('suffered')} className={`${styles.container} ${styles[getColor()]}`}>
			<div className={styles.item}>
				<div>{text}</div>
			</div>
			<div className={styles.footer}></div>
		</div>
	);
};
