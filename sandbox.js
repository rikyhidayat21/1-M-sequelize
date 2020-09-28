const {Pokeball, Pokemon, Trainer} = require('./models')

// one to one 
// 1 pokeball -> 1 pokemon

// one to many
// 1 Trainer -> memiliki banyak pokemon (n pokemon)

/** KETIKA AKAN MELAKUKAN ASOSIASI, TULIS 3 LANGKAH DIBAWAH NI
 * 1.tulis asosiasi di model
 * Pokeball.hasOne(Pokemon, {foreignKey: })
 * Pokemon.belongsTo(Pokeball, {foreignKey: })
 * >>>> Jangan lupa foreign key nya disimpen di model juga <<<<
 * 
 * Model yang punya belongsTo + model yang punya has + id
 * Pokemon -> PokeballId
 * 
 * 2. tambah properti model yang belongsto -> Pokemon
 * PokeballId: tipe datanya apa (tambah propertinya secara manual ke model)
 * 
 * 3. buat migration untuk menambah kolom
 * 
 * ingat kalo ngoding ada 2 bagian, defisini dan eksekusi
 * ingat findAll me return array
 * 
 * 
 * 
 */

//  assosiasi ini disimpannya di model

//buat migrasi baru untuk mendapatkan kolumn



// Pokeball.create({ name: 'Ultra Ball'})
//   .then(data => {
//     console.log(data)
//     return Pokemon.create({name: 'Charmender', type: 'fire', PokeballId: 2, TrainerId: 1})
//   })
//   .then(data => {
//     console.log('berhasil dibuat')
//     console.log(data)
//   })
//   .catch(err => console.log(err))

// Pokemon.findAll({where: { TrainerId: 1}})
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))

Trainer.findAll({
  where: {
    id: 1
  }, 
  include: {
    model: Pokemon
  }
})
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.log(err))