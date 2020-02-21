const petModel = require('../model/pet')

const petController = {
    index: (req,res)=>{
        res.send(petModel.listarPets());
    },
    add: (req,res)=>{

        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`${novoPet.nome} foi adicionado com sucesso!`)
        
    },
    buscar: (req, res)=> {
        let nomePet = req.params.nome;
        let petEncontrado  = petModel.buscarPet(nomePet)        
        res.send(`${petEncontrado.length} pet foi encontrado`)
    }
}

module.exports = petController;