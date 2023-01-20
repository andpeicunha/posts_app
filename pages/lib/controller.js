// CONTROLLER
import React from "react";
import Users from "../models/users";

//post user
export async function getUser(req, res) { //FUNÇÃO PARA BUSCAR USUARIOS NO BANCO DE DADOS
    try {
        const users = await Users.find({})

        if (!users) return res.status(404).json({ error: "User not Found" })
        res.status(200).json(users); //FEZ A CHAMADA GET, SE TIVER SUCESSO RETORNA O JSON
    } catch (error) {
        res.status(404).json({ error: `Method PUT getUser | Mensagem de Erro: ${error.message}` }); //SE DER ERRO RETORNA O JSON COM A MENSAGEM DE ERRO
    }
}

//post user
export async function postUser(req, res) { //FUNÇÃO PARA CRIAR USUARIOS NO BANCO DE DADOS
    try {
        const formData = req.body;
        // console.log(req.body);

        if (!formData) return res.status(404).json({ error: `formData Erro: ${error.message}` });

        Users.create(formData, function (err, data) { //CRIA UM NOVO USUARIO COM BASE NO MODEL SCHEMA
            return res.status(200).json(data)
        })

    } catch (error) {
        res.status(404).json({ error: `Method PUT postUser | Mensagem de Erro: ${error.message}` });
    }
}

//Put user
export async function putUser(req, res) { //FUNÇÃO PARA ATUALIZAR USUARIOS NO BANCO DE DADOS
    try {
        const { userId } = req.query;
        const formData = req.body;

        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user);
        }

        res.status(404).json({ error: "Usuário não Selecionado" });

    } catch (error) {
        res.status(404).json({ error: `Method PUT putUser | Mensagem de Erro: ${error.message}` });
    }
}
