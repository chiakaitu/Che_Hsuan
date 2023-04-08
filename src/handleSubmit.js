import db from "./firebase";

const handleSubmit = (inputData) => {

    // let data = {
    //     testData: testdata
    // }

    try {
        // console.log('^^^^^ in handleSubmit.js');
        // db.collection('testdata').add(data);


        // , ref => ref.where('secretPwd', '==', inputData)
        const getData = async () => {
            const doc = await db.collection('testdata').get();
            console.log('^^^^^ doc:', doc);
            doc.forEach((item) => {
                console.log('item.data()', item.data());
            });
        }

        getData();
        // let temp = db.collection('testdata').get();
        // console.log('^^^^^', temp);
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmit