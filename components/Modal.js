import {useContext} from 'react';
import globalContext from '../context';

const Modal = () => {

	const {isModalOpen, closeModal} = useContext(globalContext);

	return (
			<div className={`${!isModalOpen ? 'd-none' : null}`}>
				<button className="btn btn-danger" onClick={closeModal}>X</button>
				<div>Modal</div>
			</div>
		)
}

export default Modal;