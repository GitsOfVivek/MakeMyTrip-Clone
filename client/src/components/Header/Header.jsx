import { useState } from 'react';
import Header1 from '../Header1/Header1';
import Header2 from '../Header2/Header2';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		const yaxis = window.scrollY;
		if (yaxis > 150) {
			setIsScrolled(true);
		} else if (yaxis <= 150) {
			setIsScrolled(false);
		}
	};

	return isScrolled ? <Header2 /> : <Header1 />;
};

export default Header;
