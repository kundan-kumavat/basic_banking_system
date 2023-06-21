import React, { useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebaseConfig';

function AllCustomers(){

    const data = collection(database, 'customers');

    const [done, setDone] = useState([]);

    const getCustomers = async() => {
        const res = await getDocs(data);
        const done = res.docs.map((item) => {
            return {...item.data()}
        });

        setDone(done)
    }

    getCustomers()

    return(
        <>
         <table className="text-white mt-[2rem] w-[90vw] font-poppins">
            <tr className="text-center">
                <th>Serial number</th>
                <th>Name</th>
                <th>Account Number</th>
                <th>Balance</th>
            </tr>
            
            {
                done.map((item, i) => {
                    return(
                        <tr key={i} className="text-center">
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.account_number}</td>
                            <td>{item.balance}</td>
                        </tr>
                    )
                })
            }

         </table>
        </>
    )
}

export default AllCustomers;