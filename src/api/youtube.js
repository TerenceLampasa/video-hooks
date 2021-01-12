import axios from 'axios';

const KEY = 'AIzaSyAKsi48bgawSy7x4w00MGoMBpU3Mpcr_rI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
