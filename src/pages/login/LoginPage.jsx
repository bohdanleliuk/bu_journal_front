import React, { useEffect, useState } from 'react';
import styles from './LoginPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSubjects, loginUser } from '../../redux/thunks';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [username, setUserName] = useState('');
  let [password, setPassword] = useState('');
  
  const user = useSelector((store) => store.user);

  const handleSubmit = () => {
    dispatch(loginUser(username, password));
  }

  useEffect(() => {
    if (user.username) {
      dispatch(getAllSubjects());
      navigate('/subjects');
    }
  }, [user])

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '20px'}}>
          <label>
          Username
            <input value={username} onChange={(e) => setUserName(e.target.value)}/>
          </label>
          <label>
          Password
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage