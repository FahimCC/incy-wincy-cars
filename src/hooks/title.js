import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `Incy Wincy Cars | ${title}`;
	}, [title]);
};

export default useTitle;
