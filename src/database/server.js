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



app.get('/client', (req, res) => {
  const login = String(req.query.login);
  const password = String(req.query.password);

  const sql = "SELECT Пароль FROM Клиенты WHERE Логин = ?";
  db.get(sql, [login], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      // Логин не найден
      console.log('Логин не найден');

      return res.json(0);
    }

    if (row.Пароль === password) {
      // Логин и пароль совпадают
      console.log('Логин и пароль совпадают');

      return res.json(1);
    } else {
      // Логин есть, но пароль неверный
      console.log(' Логин есть, но пароль неверный');

      return res.json(-1);
    }
  });
});




app.get('/registr', (req, res) => {
  const login = String(req.query.login);
  const password = String(req.query.password);

  const sql = "INSERT INTO Клиенты (Логин,Пароль) VALUES(?,?)";
  db.run(sql, [login,password], (err, row) => {
    if (err) {
      console.log('Ошибка регистрации');

      return res.status(500).json({ error: err.message });
    }

    if (this.changes === 0) {
      console.log('Добавление не произошло');
      return res.status(404).json({ message: 'Ошибка при добавлении' });
    }
    console.log('Добавление успешно');
    console.log('Изменено строк:', this.changes);

    res.json({ success: true, updatedRows: this.changes });
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

 app.get('/Buys', (req, res) => {
  const login = String(req.query.login);

  const sql = `
    SELECT
      Автозапчасти.Наименование,
      Покупки."Код автозапчасти", 
      Покупки.Количество, 
      Покупки.Дата,
      Автозапчасти.Цена
    FROM Покупки
    JOIN Автозапчасти ON Покупки."Код автозапчасти" = Автозапчасти."Код автозапчасти"
    WHERE Покупки.Логин = ?
  `;

  db.all(sql, [login], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
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



app.get('/addBuy', async (req, res) => {
  try {
    const login = String(req.query.login);
    const tagsString = req.query.parts;
    if (!tagsString) {
      return res.status(400).json({ error: "Не переданы коды автозапчастей" });
    }
    const tagsArray = tagsString.split(',');
    const partCounts = {};
    tagsArray.forEach(code => {
      partCounts[code] = (partCounts[code] || 0) + 1;
    });

    const currentDate = new Date().toISOString().slice(0, 10);
    const sqlInsert = `INSERT INTO Покупки (Логин, "Код автозапчасти", Количество, Дата) VALUES (?, ?, ?, ?)`;
    const sqlCheck = `SELECT "Количество в наличии" FROM Автозапчасти WHERE "Код автозапчасти" = ?`;
    const sqlUpdateQuantity = `UPDATE Автозапчасти SET "Количество в наличии" = "Количество в наличии" - ? WHERE "Код автозапчасти" = ?`;
    const skippedParts = [];

    for (const [code, count] of Object.entries(partCounts)) {
      const row = await new Promise((resolve, reject) => {
        db.get(sqlCheck, [code], (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });

      if (!row) {
        console.warn(`Автозапчасть с кодом ${code} не найдена`);
        skippedParts.push({ code, reason: "не найдена" });
        continue;  // пропускаем
      }

      if (count > row["Количество в наличии"]) {
        console.warn(`Недостаточно автозапчастей с кодом ${code}. В наличии: ${row["Количество в наличии"]}, запрошено: ${count}`);
        skippedParts.push({ code, reason: "недостаточно в наличии" });
        continue;  
      }

      await new Promise((resolve, reject) => {
        db.run(sqlInsert, [login, code, count, currentDate], function(err) {
          if (err) reject(err);
          else resolve();
        });
      });



      await new Promise((resolve, reject) => {
        db.run(sqlUpdateQuantity, [count, code], function(err) {
          if (err) reject(err);
          else resolve();
        });
      });

      console.log(`Покупка добавлена и количество обновлено: логин=${login}, код=${code}, количество=${count}`);    }

    res.json({ 
      success: true, 
      message: 'Покупки успешно добавлены', 
      skipped: skippedParts // можно вернуть список пропущенных для информации 
    });

  } catch (error) {
    console.error("Ошибка при добавлении покупки:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});




app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});