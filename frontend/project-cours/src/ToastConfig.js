import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Configure toast notifications
const ToastConfig = {
  position: toast.position,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default ToastConfig;