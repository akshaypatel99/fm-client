import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://fm-api-r9rc.onrender.com',
});

export default axiosInstance;
