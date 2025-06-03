const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado com sucesso ao banco de dados');

    await sequelize.sync(); // ou .sync({ force: true }) para forçar recriação
    // await sequelize.sync({ force: true });
    console.log('🔄 Tabelas sincronizadas com o banco');

    app.listen(PORT, () => {
      console.log(`🚀 Backend rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o backend:', error);
    process.exit(1); // encerra o processo se falhar
  }
})();