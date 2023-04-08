import db from "../firebase";

const HandleSubmit = (inputData) => {

    // let data = {
    //     testData: testdata
    // }

    try {
        // console.log('^^^^^ in handleSubmit.js');
        // db.collection('testdata').add(data);

        const getData = async () => {
            const doc = await db.collection('testdata').where('secretPwd', '==', inputData).get();
            doc.forEach((item) => {
                console.log('item.data()', item.data());
            });
        }

        getData();
    } catch (err) {
        console.log(err)
    }
}

export default HandleSubmit