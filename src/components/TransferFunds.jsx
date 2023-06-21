import React, { useState } from 'react'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { database } from '../firebaseConfig';

const TransferFunds = () => {

  const data = collection(database, 'customers');
  const transactions = collection(database, 'transactions');

  const [done, setDone] = useState([]);
  const [status, setStatus] = useState(true);

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data(), id: item.id }
    });
    setDone(done)
  }
  getCustomers()

  const getAmount = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return arr[i].balance;
      }
    }
  }

  const getId = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return arr[i].id;
      }
    }
  }

  const getValues = async (e) => {
    e.preventDefault();

    var select1 = document.getElementById('customers1');
    var value1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById('customers2');
    var value2 = select2.options[select2.selectedIndex].value;

    let amount = document.getElementById('amt').value;

    if (value1 === value2) {
      alert("Transaction can not be done between same users!");
      setStatus(false);
      return false;
    }
    else {
      if (getAmount(value1, done) < amount) {
        alert("Balance insufficent")
        return false;
      }

      alert("Transactions SUCCESS");
      setStatus(true);

      // Updating Doc
      let user1_id = getId(value1, done);
      let user2_id = getId(value2, done);

      let user1_amount = getAmount(value1, done);
      let user2_amount = getAmount(value2, done);

      let docToUpdate1 = doc(database, 'customers', `${user1_id}`);
      let docToUpdate2 = doc(database, 'customers', `${user2_id}`);

      let balanceOfUser1 = user1_amount - amount;
      let balanceOfUser2 = user2_amount + Number(amount);

      updateDoc(docToUpdate1, {
        balance: balanceOfUser1
      })
        .then(() => {
          // Updated
        }).catch((err) => {
          console.log("ERRR" + err)
        })

      updateDoc(docToUpdate2, {
        balance: balanceOfUser2
      })
        .then(() => {
          //Updated
        }).catch((err) => {
          console.log("ERRR" + err)
        })

      // For Records used to display in the transactions section
      addDoc(transactions, {
        from: value1,
        to: value2,
        amount_transfered: amount,
        Status: status
      })

      // It doesn't refreshes page
      e.preventDefault();
    }
    console.log(value1, value2, amount, status);
  }

  return (
    <>
      <div className="h-[90vh] flex justify-center mt-[5rem]">
        <form className='flex flex-col justify-evenly w-[400px] h-[350px] rounded-md bg-secondary items-center m-[100px]' onSubmit={getValues}>
        <h2 className='text-white font-poppins font-semibold mt-[20px]'>Transfer Money</h2>
          <select className='w-[12rem] h-[2rem] font-poppins pl-[1rem] bg-primary text-white text-[1rem]' name="customers" id="customers1" placeholder='To'>
            {done.map((item, i) => {
              return (
                <option key={i} id='option1' value={item.name}>{item.name}</option>
              )
            })}
          </select>

          <select className='w-[12rem] h-[2rem] font-poppins pl-[1rem] bg-primary text-white text-[1rem]' name="customers" id="customers2" placeholder='From'>
            {done.map((item, i) => {
              return (
                <option key={i} id='option2' value={item.name}>{item.name}</option>
              )
            })}
          </select>

          <input type="number" id='amt' className='w-[14rem] h-[2rem] font-poppins pl-[1rem] bg-primary text-white text-[1rem]' placeholder='Enter Amount' required />
          <input  type="submit" className='font-poppins rounded-md py-[0.5rem] px-[1rem] bg-color font-semibold text-white text-[1rem]' value="submit" />
        </form>
      </div>
    </>
  )
}

export default TransferFunds