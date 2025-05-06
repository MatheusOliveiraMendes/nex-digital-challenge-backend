const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Backend rodando`);
  });
});