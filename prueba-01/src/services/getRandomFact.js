const CAT_ENDPOINT_RAMDOM_FACT = `https://catfact.ninja/fact`;

export const getRandomFact = async () => {

	const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT);
	const data = await res.json();

	const { fact } = data;

	if(!res.ok) {

		throw new Error('Error fetching fact.');
		return res.json();

	} else {
		
		return fact;
	}
};