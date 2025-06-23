package com.base;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
 import java.io.*;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Random;


public class Base {
   static String url = "jdbc:sqlite:Магазин автозапчастей.db";
public static void createBase(){
 // SQLite connection string
 

var start = "DROP TABLE IF EXISTS Автозапчасти; DROP TABLE IF EXISTS Клиенты; DROP TABLE IF EXISTS Покупки;";

 var table1 = "CREATE TABLE IF NOT EXISTS Автозапчасти ("
         + "	\"Код автозапчасти\" INTEGER PRIMARY KEY UNIQUE NOT NULL,"
         + "	Наименование TEXT NOT NULL,"
         + "	Цена REAL NOT NULL,"
         + "   \"Количество в наличии\" INTEGER NOT NULL,"
         +"     CONSTRAINT codePart_check CHECK(\"Код автозапчасти\" >10000 AND \"Код автозапчасти\" < 99999)"
         + ");";

var table2 = "CREATE TABLE IF NOT EXISTS Клиенты ("
         + "	\"Номер телефона\" INTEGER PRIMARY KEY NOT NULL UNIQUE,"
         + "	ФИО TEXT NOT NULL,"
         +"     CONSTRAINT phone_check CHECK(\"Номер телефона\" > 80000000000 AND \"Номер телефона\" < 89999999999)"
         + ");";

var table3 = "CREATE TABLE IF NOT EXISTS Покупки ("
         + "	\"Номер покупки\" INTEGER PRIMARY KEY UNIQUE NOT NULL,"
         + "	\"Номер телефона\" INTEGER NOT NULL,"
         + "	Дата TEXT NOT NULL,"
         + "   \"Код автозапчасти\" INTEGER NOT NULL,"
         +"     Количество INTEGER DEFAULT 1,"
         +"     Цена REAL NOT NULL,"
         +"     CONSTRAINT numberBuy_check CHECK(\"Номер покупки\" > 100000 AND \"Номер покупки\" < 999999),"
         +"     CONSTRAINT value_check CHECK(Количество > 0 AND Количество < 100),"
         +"     FOREIGN KEY (\"Номер телефона\") REFERENCES Клиенты (\"Номер телефона\"),"
         +"     FOREIGN KEY (\"Код автозапчасти\") REFERENCES Автозапчасти (\"Код автозапчасти\")"
         + ");";

 try (var conn = DriverManager.getConnection(url);
      var stmt = conn.createStatement()) {
     // create a new table
     stmt.execute(start);
     stmt.execute(table1);
     stmt.execute(table2);
     stmt.execute(table3);

 } catch (SQLException e) {
     System.out.println(e.getMessage());
 }
}


public static void insertBaseValues(){
    String sql1 = "INSERT INTO Автозапчасти (\"Код автозапчасти\", Наименование, Цена, \"Количество в наличии\") VALUES(?,?,?,?)";
    String sql2 = "INSERT INTO Клиенты (\"Номер телефона\", ФИО) VALUES(?,?)";
    


    String file1 ="Автозапчасти.txt";
    String file2 ="Клиенты.txt";
    

    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql1)) {
        try(Scanner scanner = new Scanner(new File(file1))){
            while(scanner.hasNextLine()){
                String line = scanner.nextLine();
                String[] parts = line.split(" ");
                int code = Integer.parseInt(parts[0]);
                String name = parts[1];
                name=name.replace("_"," ");
                float price = Float.parseFloat(parts[2]);
                int value = Integer.parseInt(parts[3]);
                pstmt.setInt(1, code);
                pstmt.setString(2, name);
                pstmt.setFloat(3, price);
                pstmt.setInt(4, value);
                pstmt.executeUpdate();

            }


        } catch(FileNotFoundException e){
            System.out.println("Файл не найден: " + file1);
        }

} catch (SQLException e) {
   System.out.println(e.getMessage());
}

try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql2)) {
        try(Scanner scanner = new Scanner(new File(file2))){
            while(scanner.hasNextLine()){
                String line = scanner.nextLine();
                String[] parts = line.split(" ");
                long number = Long.parseLong(parts[0]);
                String name = parts[1];
                name=name.replace("_"," ");
                pstmt.setLong(1, number);
                pstmt.setString(2, name);
            
                pstmt.executeUpdate();

            }


        } catch(FileNotFoundException e){
            System.out.println("Файл не найден: " + file2);
        }

} catch (SQLException e) {
   System.out.println(e.getMessage());
}

String sql3="INSERT INTO Покупки (\"Номер покупки\", \"Номер телефона\", Дата, \"Код автозапчасти\", Количество, Цена) VALUES" + //
        "(" + //
        "234567," + //
        "89351122334," + //
        "\"2025-01-17\"," + //
        "85134," + //
        "2," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=85134)" + //
        ")," + //
        "(" + //
        "789023," + //
        "89951122334," + //
        "\"2024-10-23\"," + //
        "72904," + //
        "5," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=72904)" + //
        ")," + //
        "(" + //
        "234891," + //
        "89272345678," + //
        "\"2024-12-23\"," + //
        "47936," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=47936)" + //
        ")," + //
        "(" + //
        "890123," + //
        "89033456789," + //
        "\"2024-05-12\"," + //
        "60382," + //
        "3," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=60382)" + //
        ")," + //
        "(" + //
        "672190," + //
        "89231234567," + //
        "\"2024-05-13\"," + //
        "41382," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=41382)" + //
        ")," + //
        "(" + //
        "234789," + //
        "89075467890," + //
        "\"2024-07-11\"," + //
        "42835," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=42835)" + //
        ")," + //
        "(" + //
        "243123," + //
        "89031234567," + //
        "\"2024-09-12\"," + //
        "51207," + //
        "3," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=51207)" + //
        ")," + //
        "(" + //
        "432123," + //
        "89122223344," + //
        "\"2024-03-05\"," + //
        "53792," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=53792)" + //
        ")," + //
        "(" + //
        "657321," + //
        "89037893456," + //
        "\"2024-09-25\"," + //
        "73512," + //
        "5," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=73512)" + //
        ")," + //
        "(" + //
        "243890," + //
        "89213456789," + //
        "\"2024-09-14\"," + //
        "31952," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=31952)" + //
        ")," + //
        "(" + //
        "423321," + //
        "89122223344," + //
        "\"2024-02-21\"," + //
        "31952," + //
        "3," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=31952)" + //
        ")," + //
        "(" + //
        "782890," + //
        "89037893456," + //
        "\"2024-04-21\"," + //
        "53792," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=53792)" + //
        ")," + //
        "(" + //
        "234654," + //
        "89075467890," + //
        "\"2024-11-12\"," + //
        "31286," + //
        "1," + //
        "(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"=31286)" + //
        ");";


try (var conn = DriverManager.getConnection(url);
      var stmt = conn.createStatement()) {
     // create a new table
     stmt.execute(sql3);
   

 } catch (SQLException e) {
     System.out.println(e.getMessage());
 }

}

public static boolean isDatabaseInitialized() {
    String checkTableQuery = "SELECT name FROM sqlite_master WHERE type='table' AND name='Автозапчасти'";
    try (var conn = DriverManager.getConnection(url);
         var stmt = conn.createStatement();
         var rs = stmt.executeQuery(checkTableQuery)) {
        return rs.next(); // Возвращает true, если таблица существует
    } catch (SQLException e) {
        System.out.println(e.getMessage());
        return false;
    }
}

public static int generateAutoCode() {
    int min=10000;
    int max=99999;
    Random random = new Random();
    return random.nextInt((max - min) + 1) + min;
}
public static int generateBuyCode() {
    int min=100000;
    int max=999999;
    Random random = new Random();
    return random.nextInt((max - min) + 1) + min;
}


public static void insertInAutoP(String name,float price,int value){
int code = generateAutoCode();
String a ="(\\\"Код автозапчасти\\\", Наименование, Цена, \\\"Количество в наличии\\\")";
    String sql = "INSERT INTO Автозапчасти VALUES(?,?,?,?)";
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1, code);
                pstmt.setString(2, name);
                pstmt.setFloat(3, price);
                pstmt.setInt(4, value);
                pstmt.executeUpdate();
              //int get=  pstmt.executeUpdate();
            //   if(get==0){
            //     code++;
            //     pstmt.setInt(1, code);
            //     pstmt.setString(2, name);
            //     pstmt.setFloat(3, price);
            //     pstmt.setInt(4, value);
            //   pstmt.executeUpdate();
            //   }
} catch (SQLException e) {
   System.out.println("Неправильное значение или уже существует");
}
}

public static int insertInClient(long number,String name){
    String a=("\"Номер телефона\", ФИО)");
    String sql = "INSERT INTO Клиенты VALUES(?,?)";
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
        pstmt.setLong(1, number);
        pstmt.setString(2, name);
            int get =    pstmt.executeUpdate();
            if(get==0){
                return 0;
               }
               return 1;
} catch (SQLException e) {
    return -1;
   //System.out.println("Неправильное значение или уже существует");
}
}

public static void insertInBuy(long number,String date,int code,int value){
    String codes = String.valueOf(code);
    String sql="INSERT INTO Покупки (\"Номер покупки\", \"Номер телефона\", Дата, \"Код автозапчасти\", Количество, Цена) VALUES(?,?,?,?,?,(SELECT Цена FROM Автозапчасти WHERE \"Код автозапчасти\"="+codes+"))";
    int cod = generateBuyCode();    
       
       
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
        pstmt.setInt(1, cod);
        pstmt.setLong(2, number);
        pstmt.setString(3,date);
        pstmt.setInt(4, code);
        pstmt.setInt(5, value);


                pstmt.executeUpdate();
} catch (SQLException e) {
   System.out.println(e.getMessage());
}
}

public static int updateAutoName(int code, String name){
    var sql = "UPDATE Автозапчасти SET Наименование = ? "
    + "WHERE \"Код автозапчасти\" = ?";

    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setString(1, name);
   pstmt.setInt(2, code);
   // update
   int get = pstmt.executeUpdate();
   if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}

public static int updateAutoPrice(int code, float price){
    var sql = "UPDATE Автозапчасти SET Цена = ? "
    + "WHERE \"Код автозапчасти\" = ?";

    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setFloat(1, price);
   pstmt.setInt(2, code);
   // update
  int get = pstmt.executeUpdate();
  if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}

public static int updateClientName(long number, String name){
    var sql = "UPDATE Клиенты SET ФИО = ? "
    + "WHERE \"Номер телефона\" = ?";

    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setString(1, name);
   pstmt.setLong(2, number);
   // update
   int get =pstmt.executeUpdate();
   if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}
public static int deleteAutoP(int code){
    var sql = "DELETE FROM Автозапчасти WHERE \"Код автозапчасти\" = ?";
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setInt(1, code);
   // update
  int get = pstmt.executeUpdate();
  if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}

public static int deleteClient(long number){
    var sql = "DELETE FROM Клиенты WHERE \"Номер телефона\" = ?";
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setLong(1, number);
   // update
   int get =pstmt.executeUpdate();
   if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}

public static int deleteBuy(int number){
    var sql = "DELETE FROM Покупки WHERE \"Номер покупки\" = ?";
    try (var conn = DriverManager.getConnection(url);
    var pstmt = conn.prepareStatement(sql)) {
   // set the parameters
   pstmt.setLong(1, number);
   // update
   int get =pstmt.executeUpdate();
   if(get==0){
    return 0;
   }
   return 1;
} catch (SQLException e) {
    return -1;
   //System.err.println(e.getMessage());
}
}





public static String[][] browseAutoP(){
     String sql = "SELECT * FROM Автозапчасти";
     String empty[][]={{"NOTHING","HETTA"},{"SOMETHING","Heyudaw"}};
     try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {
            var rs = pstmt.executeQuery();
            // while (rs.next()) {
            //     System.out.printf("%-8s%-13s%-13s%-7s%-4s%-5s%n",
            //             rs.getInt("Номер покупки"),
            //             rs.getLong("Номер телефона"),
            //             rs.getString("Дата"),
            //             rs.getInt("Код автозапчасти"),
            //             rs.getInt("Количество"),
            //             rs.getFloat("Цена")
            //     );
             ArrayList<String[]> dataList = new ArrayList<>();
          
             while (rs.next()) {
                String[] rowIndex = new String[4];
                rowIndex[0] = String.valueOf(rs.getInt("Код автозапчасти"));
                rowIndex[1] = rs.getString("Наименование");
                rowIndex[2] = String.valueOf(rs.getFloat("Цена"));
                rowIndex[3] = String.valueOf(rs.getInt("Количество в наличии"));
                dataList.add(rowIndex);

            }
            String[][] data=dataList.toArray(new String[0][4]);
            return data;
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
    return empty;
}

public static String[][] browseClient(){
    String sql = "SELECT * FROM Клиенты";
    String empty[][]={{"NOTHING","HETTA"},{"SOMETHING","Heyudaw"}};
    try (var conn = DriverManager.getConnection(url);
            var stmt = conn.createStatement();
            var rs = stmt.executeQuery(sql)) {
                ArrayList<String[]> dataList = new ArrayList<>();
           while (rs.next()) {
            //    System.out.printf("%-14s%-30s%n",
            //            rs.getLong("Номер телефона"),
            //            rs.getString("ФИО")
            //    );
            String[] rowIndex = new String[2];
            rowIndex[0] = String.valueOf(rs.getLong("Номер телефона"));
            rowIndex[1] = rs.getString("ФИО");
            dataList.add(rowIndex);
           }
           String[][] data=dataList.toArray(new String[0][4]);
            return data;
       } catch (SQLException e) {
           System.err.println(e.getMessage());
       }
       return empty;
}

public static String[][] browseBuy(){
    String sql = "SELECT * FROM Покупки";
    String empty[][]={{"NOTHING","HETTA"},{"SOMETHING","Heyudaw"}};
    try (var conn = DriverManager.getConnection(url);
            var stmt = conn.createStatement();
            var rs = stmt.executeQuery(sql)) {
                ArrayList<String[]> dataList = new ArrayList<>();
           while (rs.next()) {
            //    System.out.printf("%-8s%-13s%-13s%-7s%-4s%-5s%n",
            //            rs.getInt("Номер покупки"),
            //            rs.getLong("Номер телефона"),
            //            rs.getString("Дата"),
            //            rs.getInt("Код автозапчасти"),
            //            rs.getInt("Количество"),
            //            rs.getFloat("Цена")
            //    );
            String[] rowIndex = new String[6];
            rowIndex[0] = String.valueOf(rs.getInt("Номер покупки"));
            rowIndex[1] = String.valueOf(rs.getLong("Номер телефона"));
            rowIndex[2] = rs.getString("Дата");
            rowIndex[3] = String.valueOf(rs.getInt("Код автозапчасти"));
            rowIndex[4] = String.valueOf(rs.getInt("Количество"));
            rowIndex[5] = String.valueOf(rs.getFloat("Цена"));

            dataList.add(rowIndex);

           }
           String[][] data=dataList.toArray(new String[0][6]);
           return data;
       } catch (SQLException e) {
           System.err.println(e.getMessage());
       }
       return empty;
}

public static String[][] browseBuy(long number){
    String s = "\\\"Номер покупки\\\", \\\"Номер телефона\\\", Дата, \\\"Код автозапчасти\\\", Количество, Цена";
    String sql = "SELECT * FROM Покупки WHERE \"Номер телефона\"=? ";
    String empty[][]={};
    try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, number);

            var rs = pstmt.executeQuery();

            // while (rs.next()) {
            //     System.out.printf("%-8s%-13s%-13s%-7s%-4s%-5s%n",
            //             rs.getInt("Номер покупки"),
            //             rs.getLong("Номер телефона"),
            //             rs.getString("Дата"),
            //             rs.getInt("Код автозапчасти"),
            //             rs.getInt("Количество"),
            //             rs.getFloat("Цена")
            //     );
             ArrayList<String[]> dataList = new ArrayList<>();
          
            while (rs.next()) {
                String[] rowIndex = new String[6];
                rowIndex[0] = String.valueOf(rs.getInt("Номер покупки"));
                rowIndex[1] = String.valueOf(rs.getLong("Номер телефона"));
                rowIndex[2] = rs.getString("Дата");
                rowIndex[3] = String.valueOf(rs.getInt("Код автозапчасти"));
                rowIndex[4] = String.valueOf(rs.getInt("Количество"));
                rowIndex[5] = String.valueOf(rs.getFloat("Цена"));
                dataList.add(rowIndex);
                
            }
            String[][] data=dataList.toArray(new String[0][6]);
            return data;
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
    return empty;
}

public static void browseBuy(long number, int code){
    String sql = "SELECT * FROM Покупки WHERE \"Номер телефона\"=? AND \"Номер покупки\"=? ";
    try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, number);
            pstmt.setLong(2, code);

            var rs = pstmt.executeQuery();

            while (rs.next()) {
                System.out.printf("%-8s%-13s%-13s%-7s%-4s%-5s%n",
                        rs.getInt("Номер покупки"),
                        rs.getLong("Номер телефона"),
                        rs.getString("Дата"),
                        rs.getInt("Код автозапчасти"),
                        rs.getInt("Количество"),
                        rs.getFloat("Цена")
                );
            }
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
}

public static boolean checkClient(long number){
    String sql = "SELECT 1 FROM Клиенты WHERE \"Номер телефона\"=? ";
    try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, number);

            var rs = pstmt.executeQuery();

            if (rs.next()) {
               return true;
            }
            
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
    return false;
}


public static boolean checkAutoP(int number){
    String sql = "SELECT 1 FROM Автозапчасти WHERE \"Код автозапчасти\"=? ";
    try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, number);

            var rs = pstmt.executeQuery();

            if (rs.next()) {
               return true;
            }
            
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
    return false;
}

public static String nameClient(long number){
    String sql = "SELECT ФИО FROM Клиенты WHERE \"Номер телефона\"=? ";
    try (var conn = DriverManager.getConnection(url);
        var pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, number);

            var rs = pstmt.executeQuery();

            if (rs.next()) {
                var s = rs.getString(1);
               return s;
            }
            
    } catch (SQLException e) {
        System.err.println(e.getMessage());
    }
    return "";
}

public static String[][] reportAutoP(String partCode,String startDate,String endDate){
    String empty[][]={};
    String query = """
            SELECT 
                "Номер покупки",
                "Номер телефона",
                Дата,
                "Код автозапчасти",
                Количество,
                Цена
            FROM Покупки
            WHERE "Код автозапчасти" = ? 
              AND Дата BETWEEN ? AND ?
            ORDER BY Дата;
            """;

    try (Connection conn = DriverManager.getConnection(url);
         PreparedStatement pstmt = conn.prepareStatement(query)) {

        // Устанавливаем параметры запроса
        pstmt.setString(1, partCode);
        pstmt.setString(2, startDate);
        pstmt.setString(3, endDate);

        try (ResultSet rs = pstmt.executeQuery()) {
            // Считаем количество строк в результате
            ArrayList<String[]> dataList = new ArrayList<>();
            // Создаем массив для хранения данных
           

            // Перебираем строки результата
            while (rs.next()) {
                String[] rowIndex = new String[6];
                rowIndex[0] = rs.getString("Номер покупки");
                rowIndex[1] = rs.getString("Номер телефона");
               rowIndex[2] = rs.getString("Дата");
                rowIndex[3] = rs.getString("Код автозапчасти");
                rowIndex[4] = String.valueOf(rs.getInt("Количество"));
               rowIndex[5] = String.valueOf(rs.getDouble("Цена"));
               dataList.add(rowIndex);
            }
            String[][] data=dataList.toArray(new String[0][6]);
            return data;
        }

    } catch (SQLException e) {
        System.out.println("Ошибка подключения к базе данных: " + e.getMessage());
        return empty; // Возвращаем пустой массив в случае ошибки
    }
    
}

public static String salesReport(String partCode,String startDate,String endDate){
   // partCode = "85134"; // Код автозапчасти
      //   startDate = "2025-01-01"; // Начальная дата
       //  endDate = "2025-01-31"; // Конечная дата
        String result="";
        String query = """
            SELECT 
                "Код автозапчасти",
                SUM(Количество) AS Проданных,
                SUM(Количество * Цена) AS Сумма
            FROM Покупки
            WHERE "Код автозапчасти" = ? 
              AND Дата BETWEEN ? AND ?
            GROUP BY "Код автозапчасти";
            """;

        try (Connection conn = DriverManager.getConnection(url);
             PreparedStatement pstmt = conn.prepareStatement(query)) {

            // Устанавливаем параметры запроса
            pstmt.setString(1, partCode);
            pstmt.setString(2, startDate);
            pstmt.setString(3, endDate);

            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    String code = rs.getString("Код автозапчасти");
                    int totalQuantity = rs.getInt("Проданных");
                    double totalSales = rs.getDouble("Сумма");

                   // System.out.println("Код автозапчасти: " + code);
                    result+=("Общее количество проданных: " + totalQuantity+" ");
                    result+=("Общая сумма продаж: " + totalSales+" ");
                    return result;
                } else {
                    return result;
                    //System.out.println("Нет данных о продажах для указанной запчасти и периода.");
                }
            }
        } catch (SQLException e) {
            System.out.println("Ошибка подключения к базе данных: " + e.getMessage());
        }
        return result;
}

    public static void main(String[] args) {

       if(!isDatabaseInitialized()){
        createBase();
       insertBaseValues();
    }
       // browseAutoP();
      //  browseClient();
       // browseBuy();
       // browseBuy(89122223344L);
       // browseBuy(89122223344L,432123);
        // System.out.println(checkClient(89141234567L));
        // System.out.println(nameClient(89141234567L));
        // String data[][]=browseClient();
        // for (int i = 0; i < data.length; i++) {
        //     for (int j = 0; j < data[i].length; j++) {
        //         System.out.printf("%-15s", data[i][j]);  // Выводим каждый элемент массива
        //     }
        //     System.out.println();  // Переход на новую строку после вывода каждого ряда
        // }
      //  }else{
           // insertInAutoP( "Елочка", 100, 23);
           // insertInClient(89147894520L, "Петров Иван Иванович");
          // insertInBuy(89146132090L, "2024-11-20", 47863, 1);
         // updateAutoName(83471, "Тросик сцепления");
         System.out.println( insertInClient(88005553535L, "Иванов Иван Иванович"));
         reportAutoP("","","");
         // updateClientName(89075467890L, "Титовчик Роман Николаевич");
        // deleteClient(89035566789L);
        //  deleteAutoP(28460);

            //System.out.println("Уже существует");
      //  }
    
    }
}


