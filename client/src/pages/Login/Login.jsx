import './Login.scss';
import loginImg from './../../assets/img/loginPersuassionRoad.avif';
import LoginBox from '../../components/LoginBox/LoginBox';
import { useState } from 'react';
import SignupBox from '../../components/SignupBox/SignupBox';
import Header2 from '../../components/Header2/Header2';

const Login = () => {
	const [loginPage, setLoginPage] = useState(true);
	return (
		<section className="login-wrapper">
			<Header2 />
			<div className="login">
				<div className="container">
					<div className="input-box-wrapper">
						<div className="input-box">
							<div className="img">
								<img src={loginImg} alt="" />
							</div>
							<form>
								<div className="top">
									<div
										className={loginPage ? 'bg-blue' : ''}
										onClick={() => {
											setLoginPage(true);
										}}>
										Login
									</div>
									<div
										className={!loginPage ? 'bg-blue' : ''}
										onClick={() => {
											setLoginPage(false);
										}}>
										Signup
									</div>
								</div>
								{loginPage ? <LoginBox /> : <SignupBox />}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
