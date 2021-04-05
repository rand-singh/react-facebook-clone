import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
	return (
    	<div className='app'>
			<Header />

			<div className="app__body">
				<Sidebar />
				{/* Feed */}
				{/* Widgets - facebook embed iframe */}
			</div>

    	</div>
  	);
}

export default App;
