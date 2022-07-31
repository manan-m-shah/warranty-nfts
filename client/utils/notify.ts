import { toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message: string, type: TypeOptions) => {
  toast(message, {
    position: "bottom-right",
    type: type,
  });
}

export default notify;