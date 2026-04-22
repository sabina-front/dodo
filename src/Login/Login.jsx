import './Login.css'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import img from '../assets/img.svg'
import img1 from '../assets/img1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {

      const API = "https://69d225b35043d95be97180c9.mockapi.io/todos";
    
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [possword, setPossword] = useState("");
      
    
      const [nameError, setNameError] = useState("");
      const [posswordError, setPasswordError] = useState("");
      const [emailError, setEmailError] = useState("");

    const Login = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");


    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (possword.length < 6){
        setPasswordError("пароль должен быть из 6 символов");
        isValid = false;
    }

    if(name === ""){
        setNameError("Обизательно")
    }

    if(email === ""){
        setEmailError("Обизательно")
    }

    if(possword === ""){
        setPasswordError("Обизательно")
    }

    if (!emailRegex.test(email)) {
      setEmailError("Введите корректный email");
      isValid = false;
    }

    const newUser = {
      name: name,
      email: email,
      possword: possword
    }

    console.log(newUser)
    const res = await fetch(API,{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newUser)
    })

    const data = await res.json();

    setName("")
    setEmail("")
    setPossword("")

}


  return (
      <div className='LOGI'>
        <div className="Login-container">
            <div className="Login-content">
                <h1>Вход</h1>
                <form onSubmit={Login}>
                <div className="input-info-login">
                    <div className="input-box">
                        <img src={icon1} alt="icon" />
                        <input 
                        type="text" 
                        placeholder="Имя" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                        {/* {nameError && <span className="Error-login">{nameError}</span>} */}

                    </div>
                        {nameError && <span className="Error-login">{nameError}</span>}


                    <div className="input-box">
                        <img src={icon2} alt="icon" />
                        <input 
                        type="text" 
                        placeholder="Почта" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        {/* {emailError && <span className="Error-login">{emailError}</span>} */}

                    </div>
                        {emailError && <span className="Error-login">{emailError}</span>}


                    <div className="input-box">
                        <img src={icon3} alt="icon" />
                        <input 
                        type="text" 
                        placeholder="Пароль" 
                        value={possword}
                        onChange={(e) => setPossword(e.target.value)}/>
                        {/* {posswordError && <span className="Error-login">{posswordError}</span>} */}

                    </div>
                        {posswordError && <span className="Error-login">{posswordError}</span>}

                    </div>
                    
                    
            
           
                    

                
                <div className="footer-regist">
                    <button className='btn-regist'>Войти</button>

                    <div className="line-regist">
                        <img src={img} alt="" />
                    </div>

                    <div className="line-regist">
                        <img src={img1} alt="" />
                    </div>

                    <div className="akkaunt">
                        <p>Нет аккаунта? 
                            <Link to="/">
                                <span>Зарегистрируйтесь</span> 
                            </Link>
                        </p>
                    </div>
                </div>
                    </form>

                
            </div>

            
        </div>
    </div>
  )
}

export default Login
