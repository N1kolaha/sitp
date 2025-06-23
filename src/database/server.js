const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

const db = new sqlite3.Database('./AutoShop.db', (err) => {
  if (err) {
    console.error('Ошибка подключения к БД:', err.message);
  } else {
    console.log('Успешное подключение к БД');
  }
});

app.get('/latest', (req, res) => {
  const limit = parseInt(req.query.limit);
  const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
  const sql = `SELECT "Код автозапчасти", Наименование, Цена, "Количество в наличии" FROM Автозапчасти ORDER BY id DESC LIMIT ?`;
    db.all(sql, [safeLimit], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});



app.get('/catalog', (req, res) => {
  const limit = parseInt(10);
  const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
  const sql = `SELECT "Код автозапчасти", Наименование, Цена, "Количество в наличии" FROM Автозапчасти ORDER BY id LIMIT ?`;
    db.all(sql, [safeLimit], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});



app.get('/change', (req, res) => {
  const code = parseInt(req.query.code,10);
  const name = String(req.query.name);
  //const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
  const sql = `UPDATE Автозапчасти SET Наименование = ? WHERE "Код автозапчасти" = ?`;
    db.run(sql, [name,code], function (err)  {
    if (err) {
      console.log('Какая то ошибка');
      return res.status(500).json({ error: err.message });
    }
   
    // Проверка, были ли изменены строки
    if (this.changes === 0) {
      console.log('Запчасть с таким кодом не найдена');
      return res.status(404).json({ message: 'Запчасть с таким кодом не найдена' });
    }
    console.log('Запчасть с таким кодом найдена');
    console.log('Изменено строк:', this.changes);

    res.json({ success: true, updatedRows: this.changes });
  });
});



app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});