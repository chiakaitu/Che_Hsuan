import db from "../firebase";

const HandleSubmit = (inputData) => {

    return new Promise((resolve, reject) => {

        // let data = {
        //     secretPage: secretPage
        // }
        let output = {};

        try {
            // console.log('^^^^^ in handleSubmit.js');
            // db.collection('secretPage').add(data);

            const getData = async () => {
                const doc = await db.collection('secretPage').where('secretPwd', '==', inputData).get();
                doc.forEach((item) => {
                    output = item.data();
                });
                if (output.hasOwnProperty('content')) {
                    resolve(output);
                } else {
                    resolve({content: '猜錯了，再想想~'});
                }
            }

            getData();
        } catch (err) {
            console.log(err)
        }
    });
}

export default HandleSubmit