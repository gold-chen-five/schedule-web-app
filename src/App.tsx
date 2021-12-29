import React ,{useState, useEffect} from 'react';
import './App.css';
import Input from './Input'
import ShowCase from './ShowCase';
import { auth, db } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onSnapshot, collection, getDocs, getDoc} from 'firebase/firestore'

interface Data{
  date?: string;
  time?: string;
  name?: string;
  things?: string;
}

const App = () =>{
  const [data, setData] = useState<Data>({})
  const [user,setUser] = useState<any | null >(null)
  const [account,setAccount] = useState<string>('')
  const [password,setPassword] = useState<string>('')


  const storageUserLocal = (us :object | null) => {
    localStorage.setItem('user',JSON.stringify(us));
  }
  const login = () => {
    signInWithEmailAndPassword(auth,account,password)
    .then((user)=>{
      setUser(user.user)
      storageUserLocal(user.user)
    })
    .catch((error) =>{
      alert('帳密錯誤')
    })
  }

  useEffect(() => {
    if(user != null){
      let docId:string = ""
      getDocs(collection(db,'user'))
        .then((snapshot) => {
          snapshot.docs.forEach(doc => {
            if(doc.data().email === user.email){
              docId = doc.id
            }
          })
        })
        .then(() =>{
          const collectionDB = collection(db,'user',docId,'schedule')
          getDocs(collectionDB)
            .then((snap) => {
              snap.docs.forEach(doc => {
                console.log(doc.data().time)
                const s = new Date(doc.data().time.seconds)
                // expected output "8/30/2017"  
                console.log(s);
              })
            })
        })
    }
  },[user])

  useEffect(()=>{
    const userGet = localStorage.getItem('user')
    
    setUser( JSON.parse(userGet!)) //fix | null 
  },[])

  return (
    <div className="App">
      {
        user?(
          <div className="loginSuccess">
            <Input setData={setData}/>
            <ShowCase data={data}/>
          </div>
        ):(
          <div className='loginPage'>
            <div className="loginInfo">
              <div>
                <span>帳號:</span><input type="text" className="account" onChange={(e) => setAccount(e.target.value)}/>
              </div>
              <div>
                <span>密碼:</span><input type="text" className="password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button className="loginBtn" onClick={login}>登入</button>
            </div>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
