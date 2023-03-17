module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'carrinho',
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}