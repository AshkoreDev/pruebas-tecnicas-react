import React, { useState, useEffect } from 'react';

const CAT_ENDPOINT_RAMDOM_FACT = `https://catfact.ninja/fact`;

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';


function App() {

	const [fact, setFact] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [factError, setFactError] = useState('');

	useEffect(() => {

		fetch(CAT_ENDPOINT_RAMDOM_FACT)
			.then((res) => {

				if(!res.ok) {

					throw new Error('Error fetching fact.');
					return res.json();
				}
			})
			.then((data) => {

				const { fact } = data;
				setFact(fact);
			});

	}, []);

	useEffect(() => {

		if(!fact) return;

		const threeFirstWords = fact.split(' ', 3).join(' ');

		fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
			.then((res) => res.json())
			.then((rs) => {

				const { url } = rs;
				setImageUrl(url);
			});

	}, [fact]);

  return (
  	
  	<main>
  		{ fact && <p>{fact}</p> }
  		{ imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} width="350px"/> }
  	</main>

  );
};

export default App;