

import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
interface ageprop{
  _id:string,
  name: string,
  age:number
}


const App = () => {
 const [data , setdata] = useState<ageprop[]>([]);

 useEffect(()=>{
const fecthdta = async()=>{
const res = await fetch('https://express-test-f6pa.onrender.com/api/age/');
const fetchedData  = await res.json();
setdata(fetchedData);
}
fecthdta();
 },[]);
const [namein  , setname] = useState('');
const [agein  , setage] = useState('');


 const addage = async()=>{
  try{


    if (!window.confirm('Are you sure you want to delete this entry?')) {
            return; 
        }

 await axios.post(
  
        'https://express-test-f6pa.onrender.com/api/age/add',
        { name: namein, age:agein },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      alert('Age added successfully!'); // User feedback
setname('');
setage('');

} catch{
  alert('asd');
}

 }


const deleteage = async (id: any) => { // id: any is fine for now, or string if you know it's a string
    try {
     
        if (!window.confirm('Are you sure you want to delete this entry?')) {
            return; 
        }

     
        const response = await axios.delete(`https://express-test-f6pa.onrender.com/api/age/${id}`);

        console.log('Age deleted successfully:', response.data);
        alert('Age deleted successfully!'); 

    } catch (error: any) { // Catch the error object for detailed debugging
        console.error('Error deleting age:', error); // Log the full error object

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx (e.g., 400, 404, 500)
            console.error('Server response error:', error.response.data);
            console.error('Server response status:', error.response.status);
            alert(`Error: ${error.response.data.message || 'Server error'}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            alert('Error: No response from server. Is the server running?');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Axios setup error:', error.message);
            alert('Error: Could not send request.');
        }
    }
};





  return (
    <main>
      <section>

<form onSubmit={addage}>
<input type="text" onChange={(e)=> setname(e.target.value)} />
<input type="number" onChange={(e)=> setage(e.target.value)} />
<button type='submit'>save</button>

</form>


{data.map(mad =>
 <>
 <div key={mad._id}>{mad.name} || {mad.age} ==
<button onClick={()=>deleteage(mad._id)}>Delete</button>


 </div>
 </> 
)}

      </section>
    </main>
   );
};

export default App;
