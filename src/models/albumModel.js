module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        year: DataTypes.INTEGER
    }

    return sequelize.define('Album', schema);
}