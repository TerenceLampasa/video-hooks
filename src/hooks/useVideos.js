import { useEffect, useState } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	});

	// setSelectedVideo(response.data.items[0]); x
	const search = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
