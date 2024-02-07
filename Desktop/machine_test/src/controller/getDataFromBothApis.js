import fetch from 'node-fetch';
import adminSchema from "../model/adminSchema.js";

const createAdmin = async function (req, res) {
    const data = req.body;
    const admin = await adminSchema.create(data);
    return res.status(201).send({ message: admin });
}

const fetchData = async (req, res) => {
    try {
        const [api1, api2] = await Promise.all([
            fetch('http://localhost:4000/getAdmins').then(data => data.json()),
            fetch('http://localhost:4000/getBooks').then(data => data.json()),
        ]);

        console.log('this is from the first api url', api1);
        console.log('this is from the second api url', api2);

        res.status(200).send({ api1, api2 });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
};

const getAdmins = async function (req, res) {
    const admins = await adminSchema.find();
    return res.status(200).send({ message: admins });
}

export { createAdmin, getAdmins, fetchData };
