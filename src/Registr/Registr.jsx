import './Registr.css'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import img from '../assets/img.svg'
import img1 from '../assets/img1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Registr() {

  const API = "https://69d225b35043d95be97180c9.mockapi.io/todos";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [possword, setPossword] = useState("");
  const [tel, setTel] = useState("");

  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [posswordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");


const Regi = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setTelError("");
    setPasswordError("");


    let isValid = true;

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (possword.length < 6){
        setPasswordError("пароль должен быть из 6 символов");
        isValid = false;
    }

    if(tel === ""){
        setTelError("Обизательно")
    }

    if (!nameRegex.test(name)) {
      setNameError("Введите корректное имя");
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Введите корректный email");
      isValid = false;
    }

    const newUser = {
      name: name,
      email: email,
      possword: possword,
      tel: tel
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
    setTel("")

}
    


  return (
    <div className='RIGI'>
        <div className="Rigistr-container">
            <div className="Registr-content">
                <h1>Регистрация</h1>
                <form  onSubmit={Regi}>
                <div className="input-info-regist">
                    <div className="input-box-registr">
                        <img src={icon1} alt="icon" />

                        <div className="errors">
                            <input 
                            type="text" 
                            placeholder="Введите имя" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && <span className="Error">{nameError}</span>}
                        </div>
                        
                    </div>

                    <div className="input-box-registr">
                        <img src={icon2} alt="icon" />
                        <div className="errors">
                            <input 
                            type="email" 
                            placeholder="Введите почту" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <span className="Error">{emailError}</span>}
                        </div>
                    </div>
                </div>

                <div className="input-info-regist">
                    <div className="input-box-registr">
                        <img src={icon3} alt="icon" />
                        <div className="errors">
                            <input 
                            type="password" 
                            placeholder="Введите пароль" 
                            value={possword}
                            onChange={(e) => setPossword(e.target.value)}
                            />
                            {posswordError && <span className="Error">{posswordError}</span>}
                        </div>
                    </div>

                    <div className="input-box-registr">
                        <img src={icon4} alt="icon" />
                        <div className="errors">
                            <input 
                            type="tel" 
                            placeholder="Введите телефон" 
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            />
                            {telError && <span className="Error">{telError}</span>}
                        </div>
                    </div>
                </div>
                <div className="footer-regist">
                    <button className='btn-regist'>Зарегистрироваться</button>
                    
                    <div className="line-regist">
                        <img src={img} alt="" />
                    </div>

                    <div className="line-regist">
                        <img src={img1} alt="" />
                    </div>

                    <div className="akkaunt">
                        <p>Есть аккаунт?
                            <Link to="/login">
                                <span>Войти в аккаунт</span> 
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

export default Registr
