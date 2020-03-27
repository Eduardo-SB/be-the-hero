import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = ({
            name,
            email,
            whatsapp,
            uf,
            city
        });

        try{
            const response = await Api.post('ongs', data);

            alert(`Segu id : ${response.data.id}`);

            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.' + err);
        }
        
    }

    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the hero"/>
                
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                <Link className="back-link" to="/">
                    <FiArrowLeft  size={16} color="#E02041"/> 
                    Voltar para logon
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="number" placeholder="WhatsAPP" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                
                <div className="input-group">
                    <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                    <input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}/>
                </div>
                
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}
