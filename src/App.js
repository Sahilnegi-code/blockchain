import './App.css';
import {useState , useEffect} from 'react';
import Web3 from 'web3';
import Electionabi from './contracts/Election.json'
import Navbar from './Component/Navbar';
import Body from './Component/Body'
function App() {
  const [currentaccount, setcurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [Electionsm , setElectionsm] = useState({});
  const [candidate1, setcandidate1] = useState();
  const [candidate2, setcandidate2] = useState();

useEffect(() => {
loadweb3();
loadBloackchaindata();
}, [])

useEffect(() => {
  console.log("negi",candidate1)
}, [candidate1])


  const loadweb3 = async()=>{
    if(window.ethereum){
window.web3 = new Web3(window.ethereum);
await window.ethereum.enable()
}
else if(window.web3){
  
  window.web3 = new Web3(window.web3.currentProvider);
    }
    else{
      window.alert("HI");
    }
  }  

  const loadBloackchaindata = async()=>{
    const web3 = window.web3;
    const accounts = await  web3.eth.getAccounts();
    const account = accounts[0];
    setcurrentaccount(account);
    console.log(accounts);
    const networkId =  await web3.eth.net.getId();
   const networkData =  Electionabi.networks[networkId] ;
    console.log(networkData);
    if(networkData){
      const election = new web3.eth.Contract(Electionabi.abi,networkData.address);
      setloader(false);
      setElectionsm(election);
      const cand1 = await election.methods.candidates(1).call();
      const cand2 = await election.methods.candidates(2).call();
      
      const candidate1Id = cand1.id;
      const candidate2Id = cand2.id;
      const candidate1vote = cand1.votes;
      const candidate2vote = cand2.votes;
      const candidate2name = cand2.name;
      const candidate1name = cand1.name;
      console.log("cand1",cand1);
      setcandidate1(cand1);
     
      setcandidate2(cand2);
          }
    else{
      window.alert("NOt");
    }
  }

  window.ethereum.on('accountsChanged', function (acc) {
    setcurrentaccount(acc);
  })

console.log("sahil",candidate1)


  return (
  <>
  {
  loader ?
  (

    <h1>
    Loading ....
    </h1>
    
    
  ):
    (
      
      
      <div>
      <Navbar accounts ={currentaccount}/>
      <div className = 'container'>

      <div className ="mt-4" style = {{textAlign:'center'}}>
      <h1>Voting app</h1>
      </div>
      <hr style ={{width:'100%' , backgroundColor:'blue', borderWidth:'10px'}} />  


      <div  style = {{ marginTop:'30px',justifyContent:'space-around', display:'flex'}}>
  
      <th>#</th>
      <th>Name</th>
      <th>Votes</th>
      </div>
    


  <hr style ={{ margin:'30px 0px',width:'100%' , backgroundColor:'grey',  borderWidth:'3px'}} />  

  <div style={{display:'flex', flexDirection:'column'}}>

  <div style={{display:'flex' ,justifyContent:'space-around'}}>
  <span>{candidate2.id}</span>
  <span>{candidate2.name}</span>
  <span>{candidate2.votes}</span>
  </div>
  
  <hr style ={{  margin:'30px 0px',width:'100%' , backgroundColor:'grey' , borderWidth:'3px'}} />  
  <div style={{display:'flex' ,justifyContent:'space-around'}}>
  <span>{candidate1.id}</span>
  <span>{candidate1.name}</span>
  <span>{candidate1.votes}</span>
  </div> 



</div>
    




     




      </div>
      </div>
      
      
      
      )
    }
    </>
    );
  }
  
  export default App;
  











