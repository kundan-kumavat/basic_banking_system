import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";

function Transactions(){

    const data = collection(database, 'transactions');
    const [done, setDone] = useState([]);

    const getTransactions = async() => {
        const res = await getDocs(data);
        const done = res.docs.map((item) => {
            return{...item.data()}
        });

        setDone(done);
    }

    getTransactions();

    return(
        <>
        <table className="text-white mt-[2rem] w-[90vw] font-poppins items-center">
            <tr className="items-center">
                <th>Serial Number</th>
                <th>From</th>
                <th>To</th>
                <th>Amount Transfered</th>
                <th>Status</th>
            </tr>

            {
                done.map((item, i) => {
                    return(
                        <tr key={i} className="items-center">
                            <td>{ i + 1 }</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.amount_transfered}</td>
                            <td>{item.Status ? 'true' : 'false'}</td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    )
}

export default Transactions;