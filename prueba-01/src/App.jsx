import React from 'react';
import { useCatImage } from './hooks/useCatImage.jsx';
import { useCatFact } from './hooks/useCatFact.jsx';

function App() {

	const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => refreshFact();


  return (
  	
  	<main>
  		{ fact && <p>{fact}</p> }
  		{ 
  			imageUrl 
  			&& 
  			<img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} width="300px"/> 
  		}

  		<button onClick={handleClick}>Get new fact!</button>
  	</main>

  );
};

export default App;