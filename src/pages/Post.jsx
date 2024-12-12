import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams } from "react-router-dom"
import { buscar } from "../api/api"

const Post = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()    //capturamos los parametros enviados por la url

    useEffect(()=>{
        buscar(`posts/${id}`, setPost)
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