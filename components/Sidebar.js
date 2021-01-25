import {useContext} from 'react';
import globalContext from '../context';

const Sidebar = () => {

	const {isSidebarOpen, closeSidebar} = useContext(globalContext);

	return (
			<div className={`${!isSidebarOpen ? 'd-none' : null}`}>
				<div className={`text-right w-100`}>
					<button className="btn btn-danger" onClick={closeSidebar}>X</button>
				</div>
				<div className="col-12 text-center">Link 1</div>
				<div className="col-12 text-center">Link 1</div>
				<div className="col-12 text-center">Link 1</div>
				<div className="col-12 text-center">Link 1</div>
			</div>
		)
}

export default Sidebar;