import {useState} from 'react';
import globalContext from './context';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

const App = () => {


		const [isSidebarOpen, setIsSidebarOpen] = useState(false);
		const [isModalOpen, setIsModalOpen] = useState(false);

	   const openSidebar = () => { setIsSidebarOpen(true);}
	   const closeSidebar = () => { setIsSidebarOpen(false);}

		const openModal    = () => { setIsModalOpen(true); }
		const closeModal   = () => { setIsModalOpen(false); }
	return (
		<globalContext.Provider value={{isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar}}>
			<button className={`btn btn-danger ${isSidebarOpen ? 'd-none' : null}`} onClick={openSidebar}>OS</button>
			<button className={`btn btn-danger ${isModalOpen ? 'd-none' : null}`} onClick={openModal}>OM</button>
		<div className="row">
			<div className="col-3">
				<Sidebar />
			</div>
			<div className="col-9">
				<Modal />
			</div>
		</div>
		</globalContext.Provider>

	)
}

export default App;