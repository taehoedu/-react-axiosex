import React from "react";
import axios from "axios";
import $ from 'jquery';

axios.defaults.withCredentials = true;

const Axios = () => {

    // handler
    const getBtnClickHandler = () => {
        console.log("[Axios] getBtnClickHandler()");

        getData();

    }

    const postBtnClickHandler = () => {
        console.log("[Axios] postBtnClickHandler()");

        postData();

    }

    const putBtnClickHandler = () => {
        console.log("[Axios] putBtnClickHandler()");

        putData();

    }

    const deleteBtnClickHandler = () => {
        console.log("[Axios] deleteBtnClickHandler()");

        deleteData();

    }

    const TransferFileBtnClickHandler = () => {
        console.log("[Axios] TransferFileBtnClickHandler()");

        transferFile();

    }

    async function getData() {
        try {
            const response = await axios.get('http://localhost:8090/axios/get_data', 
            // GET: params에 실어 보냄
            {
                params: {
                    'id': 'gildong',
                },
                withCredentials: true,
            }
        );

        console.log("[Axios] GET CUMMUNICATION SUCCESS!!");
        console.log("response: ", response);
        console.log("data1: ", response.data.data1);
        console.log("data2: ", response.data.data2);
        console.log("data3: ", response.data.data3);
            

        } catch (e) {
            console.log("[Axios] GET CUMMUNICATION ERROR!!");

        }
    }

    async function postData() {
        try {
            const response = await axios.post('http://localhost:8090/axios/post_data',
            // POST: body에 실어 보냄
            {
                'id': 'gildong',
                withCredentials: true,
            },
        );

        console.log("[Axios] POST CUMMUNICATION SUCCESS!!");
        console.log("response: ", response);
        console.log("data1: ", response.data.data1);
        console.log("data2: ", response.data.data2);
        console.log("data3: ", response.data.data3);
            

        } catch (e) {
            console.log("[Axios] POST CUMMUNICATION ERROR!!");

        }
    }

    async function putData() {
        try {
            const response = await axios.put('http://localhost:8090/axios/put_data', 
            // PUT: body에 실어 보냄
            {
                'id': 'gildong',
                withCredentials: true,
            },
        );

            console.log("[Axios] PUT CUMMUNICATION SUCCESS!!");
            console.log("response: ", response);
            console.log("data1: ", response.data.data1);
            console.log("data2: ", response.data.data2);
            console.log("data3: ", response.data.data3);
            

        } catch (e) {
            console.log("[Axios] PUT CUMMUNICATION ERROR!!");

        }
    }

    async function deleteData() {
        try {
            const response = await axios.delete('http://localhost:8090/axios/delete_data', 
            // GET: data 실어 보냄
            {
                data: {
                    'id': 'gildong',
                },
                withCredentials: true,
            }
            
        );

            console.log("[Axios] DELETE CUMMUNICATION SUCCESS!!");
            console.log("response: ", response);
            console.log("data1: ", response.data.data1);
            console.log("data2: ", response.data.data2);
            console.log("data3: ", response.data.data3);
            

        } catch (e) {
            console.log("[Axios] DELETE CUMMUNICATION ERROR!!");

        }
    }

    async function transferFile() {

        let attach_files = $('input[name="attach_file"]');
        let files = attach_files[0].files;

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("attach_file", files[0]);

        axios({
            method: 'post',
            url: 'http://localhost:8090/axios/transfer_file',
            data: formData,
        })
        .then(response => {
            console.log("[Axios] TRANSFER FILE CUMMUNICATION SUCCESS!!");
            console.log("response: ", response);
            console.log("data1: ", response.data.data1);
            console.log("data2: ", response.data.data2);
            console.log("data3: ", response.data.data3);

        })
        .catch(e => {
            console.log("[Axios] TRANSFER FILE CUMMUNICATION FAIL!!");
            
        });

        // try {
        //     const response = await axios.post();
                
        //         'http://localhost:8090/axios/transfer_file',
        //     // POST: body에 실어 보냄
        //     {
        //         'id': 'gildong',
        //         data: formData,
        //         withCredentials: true,
        //     },
        // );

        // console.log("[Axios] POST CUMMUNICATION SUCCESS!!");
        // console.log("response: ", response);
        // console.log("data1: ", response.data.data1);
        // console.log("data2: ", response.data.data2);
        // console.log("data3: ", response.data.data3);
            

        // } catch (e) {
        //     console.log("[Axios] POST CUMMUNICATION ERROR!!");

        // }
    }

    /*
    조회: GET
    등록: POST
    수정: PUT
    삭제: DELETE
    */
    return(
        <>
            <input type="button" value="GET BUTTON" onClick={getBtnClickHandler} /> <br />       
            <input type="button" value="POST BUTTON" onClick={postBtnClickHandler} /> <br />
            <input type="button" value="PUT BUTTON" onClick={putBtnClickHandler} /> <br />
            <input type="button" value="DELETE BUTTON" onClick={deleteBtnClickHandler} /> <br /><br />
            <input type="file" name="attach_file" /> <br />
            <input type="button" value="TRANSFER FILE BUTTON" onClick={TransferFileBtnClickHandler} /><br />
        </>
    );
}

export default Axios;