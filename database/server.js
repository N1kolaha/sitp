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
 // const limit = parseInt(10);
 // const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
  const sql = `SELECT "Код автозапчасти", Наименование, Цена, "Количество в наличии" FROM Автозапчасти ORDER BY id`;
    db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


app.get('/search', (req, res) => {
  const code = parseInt(req.query.code,10);
  // const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
   const sql = `SELECT "Код автозапчасти", Наименование, Цена, "Количество в наличии" FROM Автозапчасти WHERE "Код автозапчасти" = ?`;
     db.all(sql, [code], (err, rows) => {
     if (err) {
       return res.status(500).json({ error: err.message });
     }
     res.json(rows[0]);
   });
 });




app.get('/change', (req, res) => {
  const code = parseInt(req.query.code,10);
  const name = String(req.query.name);
  const price = parseFloat(req.query.price);
  //const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
  let sql="";
  let value;
  if(price==0){
    sql = `UPDATE Автозапчасти SET Наименование = ? WHERE "Код автозапчасти" = ?`;
    value=name;

  }
  else{
    sql = `UPDATE Автозапчасти SET Цена = ? WHERE "Код автозапчасти" = ?`;
    value=price;

  }

    db.run(sql, [value,code], function (err)  {
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



app.get('/delete', (req, res) => {
  const code = parseInt(req.query.code,10);
  console.log(code);
  //const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;
const sql = `DELETE FROM Автозапчасти WHERE "Код автозапчасти" = ?`;
    db.run(sql, [code], function (err)  {
    if (err) {
      console.error("SQL Error:", err.message);
      console.log('Какая то ошибка');
      return res.status(500).json({ error: err.message });
    }
   
    // Проверка, были ли изменены строки
    if (this.changes === 0) {
      console.log('Удаление не произошло');
      return res.status(404).json({ message: 'Ошибка при удалении' });
    }
    console.log('Удаление успешно');
    console.log('Изменено строк:', this.changes);

    res.json({ success: true, updatedRows: this.changes });
  });
});

 

app.get('/add', (req, res) => {
  
  const code = parseInt(req.query.code,10);
  const name = String(req.query.name);
  const price = parseFloat(req.query.price);
  const value = parseInt(req.query.value,10);
  console.log(code+" "+name+" "+price+" "+value);
  //const safeLimit = Number.isNaN(limit) || limit <= 0 ? 10 : limit;

  if (!name || isNaN(price) || isNaN(value)) {
    return res.status(400).json({ error: 'Некорректные параметры запроса' });
  }

  const sql = `INSERT INTO Автозапчасти ("Код автозапчасти",Наименование,Цена,"Количество в наличии") VALUES(?,?,?,?)`;
    db.run(sql, [code,name,price,value], function (err)  {
    if (err) {
      console.error("SQL Error:", err.message);
      console.log('Какая то ошибка');
      return res.status(500).json({ error: err.message });
    }
   
    // Проверка, были ли изменены строки
    if (this.changes === 0) {
      console.log('Добавление не произошло');
      return res.status(404).json({ message: 'Ошибка при добавлении' });
    }
    console.log('Добавление успешно');
    console.log('Изменено строк:', this.changes);

    res.json({ success: true, updatedRows: this.changes });
  });
});





app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});