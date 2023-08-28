import React from 'react'
import AppContext from '../context';

export const useCart = () => {
	const { addItem, setAddItem } = React.useContext(AppContext);
	const totalSum = addItem.reduce((sum, obj) => sum + obj.price, 0);

	return { addItem, setAddItem, totalSum }
}