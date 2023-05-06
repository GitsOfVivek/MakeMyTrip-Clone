import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Flights from './pages/Flights/Flights';
import Login from './pages/Login/Login';
import Hotels from './pages/Hotels/Hotels';
import Trains from './pages/Trains/Trains';
import Error from './pages/Error/Error';
import Checkout from './pages/Checkout/Checkout';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/flights" element={<Flights />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/trains" element={<Trains />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/home" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
