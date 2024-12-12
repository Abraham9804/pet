import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()    //capturamos los parametros enviados por la url
    const navigate = useNavigate()
    useEffect(()=>{
        //buscar retorna una promesa, asi que usamos catch para redireccionar en caso de no encontrar un post
        buscar(`posts/${id}`, setPost).catch(()=>{ navigate("/not-found")}) //redireccionamos a not-found el cual a la vez accedera al path comodin *
    }, [id])    //el hook se ejecutara cada vez que cambie el id

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post 