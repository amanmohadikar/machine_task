// import fetch from 'node-fetch';

// const fetchDataFromApiA = async () => {
//     const response = await fetch('http://localhost:4000/getBooks');
//     const data = await response.json();
//     return data;
// };

// const fetchDataFromApiB = async () => {
//     const response = await fetch('http://localhost:4000/getAdmins');
//     const data = await response.json();
//     return data;
// };

// const fetchDataUsingRace = async (req, res) => {
//     try {
//         const result = await Promise.race([
//             fetchDataFromApiA(),
//             fetchDataFromApiB()
//         ]);

//         console.log('Result from the fastest API response:', result);

//         res.status(200).send({ result });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ error: error.message });
//     }
// };

// export { fetchDataUsingRace, fetchDataFromApiA, fetchDataFromApiB };

// getDataFromSeperateApis.js
import fetch from 'node-fetch';

const fetchDataFromApiA = async () => {
    const response = await fetch('http://localhost:4000/getBooks');
    const data = await response.json();
    return data;
};

const fetchDataFromApiB = async () => {
    const response = await fetch('http://localhost:4000/getAdmins');
    const data = await response.json();
    return data;
};

const fetchDataUsingRaceFromApiA = async (req, res) => {
    try {
        const result = await fetchDataFromApiA();
        console.log('Result from API A:', result);
        res.status(200).send({ result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
};

const fetchDataUsingRaceFromApiB = async (req, res) => {
    try {
        const result = await fetchDataFromApiB();
        console.log('Result from API B:', result);
        res.status(200).send({ result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
};

export { fetchDataUsingRaceFromApiA, fetchDataUsingRaceFromApiB };
