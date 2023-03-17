import React, {useState} from "react"
import './style.css'
import Navbar from '../../shared/Navbar/index'
import Message from "../../shared/Message"
import Footer from "../../shared/Footer"
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addItemFetch } from "../../../store/fetchAction"

import { showMessage, hideMessage } from "../../../store/ducks/layout";

const Add = () =>{

    const [form, setForm] = useState({ name: '', description: '', price: '', url: ''})
    const dispatch = useDispatch()


    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    function onSubmit(e){
        e.preventDefault();

        dispatch(addItemFetch(form))
        setForm({ name: '', description: '', price: '', url: ''})
        dispatch(showMessage())
        setTimeout(()=>dispatch(hideMessage()), 2500)
    }

return (
    <>
    <Navbar/>
    <div className="add-section-main">
    <Message/>
        <div className="form-main-add">
            <form action="" onSubmit={onSubmit}>
                <div className="label-form-add">
                    <label>Nome:</label>
                    <input 
                    required
                    onChange={formChange}
                    type="text" 
                    name="name"
                    placeholder="Digite o nome do produto"
                    value={form.name}
                     />
                </div>
                <div className="label-form-add-description">
                    <label>Descrição:</label>
                    <input 
                    required
                    onChange={formChange}
                    type="text" 
                    name="description"
                    placeholder="Digite a descrição do produto"
                    value={form.description}
                    />
                </div>
                <div className="label-form-add">
                    <label htmlFor="">Preço:</label>
                    <input 
                    required
                    onChange={formChange}
                    type="number" 
                    name="price"
                    placeholder="Valor do produto em real"
                    value={form.price}
                    />
                </div>
                <div className="label-form-add">
                    <label htmlFor="">Imagem:</label>
                    <input 
                    required
                    onChange={formChange}
                    type="text"
                    name="url"
                    placeholder="Digite a URL da imagem"
                    value={form.url}
                    />
                </div>
                <div className="button-add-form">
                    <Link className="return-add" to={'/'}>Voltar</Link>
                    <button className="button-add" type="submit">Adicionar</button>

                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
)

}


export default Add;