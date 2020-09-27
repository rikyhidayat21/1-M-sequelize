const {Pokeball, Pokemon} = require('./models')

// one to one 
// 1 pokeball -> 1 pokemon

/**
 * 1.tulis asosiasi di model
 * Pokeball.hasOne(Pokemon, {foreignKey: })
 * Pokemon.belongsTo(Pokeball, {foreignKey: })
 * 
 * Model yang punya belongsTo + model yang punya has + id
 * Pokemon -> PokeballId
 * 
 * 2. tambah properti model yang belongsto -> Pokemon
 * PokeballId: tipe datanya apa
 * 
 * 3. buat migration untuk menambah kolom
 * 
 * 
 * ingat kalo ngoding ada 2 bagian, defisini dan eksekusi
 */

//  assosiasi ini disimpannya di model

//buat migrasi baru untuk mendapatkan kolumn
