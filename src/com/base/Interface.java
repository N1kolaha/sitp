import com.base.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Interface {

    public static class clientFrame {
        JFrame clientFrame;
        clientFrame(){
            clientFrame = new JFrame("Магазин Автозапчастей");
            clientFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            clientFrame.setSize(1000, 700);
            clientFrame.setLayout(new CardLayout());

            JTextField clientTextField = new JTextField(20);
            clientTextField.setBounds(70,240,200,25);

            JTextField inputPartField = new JTextField();
            inputPartField.setBounds(560, 90, 400, 20);

            JTextField inputclientField = new JTextField();
            inputclientField.setBounds(560, 90, 400, 20);

            JTextField inputbuyField = new JTextField();
            inputbuyField.setBounds(560, 90, 400, 20);

            JTextField deletebuyField = new JTextField();
            deletebuyField.setBounds(620, 240, 80, 20);

            JTextField reportbuyField = new JTextField();
            reportbuyField.setBounds(560, 400, 400, 20);

            JTextField reportingField = new JTextField();
            reportingField.setBounds(560, 460, 400, 20);
            reportingField.setEditable(false);

            JTextField codePartField = new JTextField();
            codePartField.setBounds(550, 230, 80, 25);

            JTextField numberClientField = new JTextField();
            numberClientField.setBounds(560, 230, 90, 25);

            JTextField deletecodePartField = new JTextField();
            deletecodePartField.setBounds(695, 375, 80, 25);

            JTextField deletenumberClientField = new JTextField();
            deletenumberClientField.setBounds(690, 375, 90, 25);

            JTextField namePartField = new JTextField();
            namePartField.setBounds(660, 230, 180, 25);

            JTextField nameClientField = new JTextField();
            nameClientField.setBounds(670, 230, 250, 25);

            JTextField pricePartField = new JTextField();
            pricePartField.setBounds(870, 230, 80, 25);

            JTextField parolField = new JTextField();
            parolField.setBounds(120, 410, 110, 25);

            JLabel parolLabel = new JLabel("Введите пароль:");
            parolLabel.setBounds(120,390,400,25);
            parolLabel.setFont(new Font("Arial", Font.BOLD, 12));

            
            JLabel resultLabel = new JLabel("Добро пожаловать в магазин автозапчастей, введите свой номер телефона");
            resultLabel.setBounds(10,200,450,25);
            resultLabel.setFont(new Font("Arial", Font.BOLD, 12));


            JLabel tovarLabel = new JLabel("Автозапчасти");
            tovarLabel.setBounds(645,10,400,25);
            tovarLabel.setFont(new Font("Arial", Font.BOLD, 20));
           
            JLabel tovarLabel1 = new JLabel("Автозапчасти");
            tovarLabel1.setBounds(20,10,400,25);
            tovarLabel1.setFont(new Font("Arial", Font.BOLD, 20));

            JLabel tovarLabel2 = new JLabel("Клиенты");
            tovarLabel2.setBounds(20,10,400,25);
            tovarLabel2.setFont(new Font("Arial", Font.BOLD, 20));

            JLabel buyLabel2 = new JLabel("Покупки");
            buyLabel2.setBounds(20,10,400,25);
            buyLabel2.setFont(new Font("Arial", Font.BOLD, 20));

            JLabel newtovarLabel1 = new JLabel("Добавить новую автозапчасть");
            newtovarLabel1.setBounds(620,50,400,25);
            newtovarLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel newclientLabel1 = new JLabel("Добавить нового клиента");
            newclientLabel1.setBounds(620,50,400,25);
            newclientLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel newbuyLabel1 = new JLabel("Добавить новую покупку");
            newbuyLabel1.setBounds(620,50,400,25);
            newbuyLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel deletebuyLabel1 = new JLabel("Удалить покупку");
           deletebuyLabel1.setBounds(620,200,400,25);
            deletebuyLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel reportbuyLabel1 = new JLabel("Отчет о продаже автозапчасти");
           reportbuyLabel1.setBounds(620,360,400,25);
           reportbuyLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel changetovarLabel1 = new JLabel("Изменить название/цену автозапчасти");
            changetovarLabel1.setBounds(580,180,400,25);
            changetovarLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel changeclientLabel1 = new JLabel("Изменить ФИО клиента");
            changeclientLabel1.setBounds(600,180,400,25);
            changeclientLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel deletetovarLabel1 = new JLabel("Удалить автозапчасть");
            deletetovarLabel1.setBounds(640,330,400,25);
           deletetovarLabel1.setFont(new Font("Arial", Font.BOLD, 18));

           JLabel deleteclientLabel1 = new JLabel("Удалить клиента");
           deleteclientLabel1.setBounds(640,330,400,25);
          deleteclientLabel1.setFont(new Font("Arial", Font.BOLD, 18));

            JLabel exampleLabel1 = new JLabel("Пример: Зеркала задние 1450.0 3");
            exampleLabel1.setBounds(560,70,400,25);
            exampleLabel1.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel buyexampleLabel1 = new JLabel("Пример: 88005553535 2024-12-21 41382 5");
            buyexampleLabel1.setBounds(560,70,400,25);
            buyexampleLabel1.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel deletebuyexampleLabel1 = new JLabel("Номер покупки");
            deletebuyexampleLabel1.setBounds(610,220,400,25);
            deletebuyexampleLabel1.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel reportexampleLabel1 = new JLabel("Пример: 85134 2024-01-01 2024-12-31");
            reportexampleLabel1.setBounds(560,380,400,25);
            reportexampleLabel1.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel clientexampleLabel1 = new JLabel("Пример: 88005553535 Иванов Иван Иваныч");
            clientexampleLabel1.setBounds(560,70,400,25);
            clientexampleLabel1.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel2 = new JLabel("КОД");
            exampleLabel2.setBounds(575,210,400,25);
            exampleLabel2.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel3 = new JLabel("Новое название");
            exampleLabel3.setBounds(700,210,400,25);
            exampleLabel3.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel4 = new JLabel("Новая цена");
            exampleLabel4.setBounds(875,210,400,25);
            exampleLabel4.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel5 = new JLabel("КОД");
            exampleLabel5.setBounds(715,355,400,25);
            exampleLabel5.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel6 = new JLabel("Номер");
            exampleLabel6.setBounds(585,210,400,25);
            exampleLabel6.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel7 = new JLabel("ФИО");
            exampleLabel7.setBounds(760,210,400,25);
            exampleLabel7.setFont(new Font("Arial", Font.PLAIN, 12));

            JLabel exampleLabel8 = new JLabel("Номер");
            exampleLabel8.setBounds(715,355,400,25);
            exampleLabel8.setFont(new Font("Arial", Font.PLAIN, 12));

            JButton button = new JButton("Подтвердить");
            JButton button1 = new JButton("Выйти");
            JButton button2 = new JButton("Войти как администратор");
            JButton button3 = new JButton("Выйти");
            JButton button4 = new JButton("ОК");
            JButton button5 = new JButton("ОК");
            JButton button6 = new JButton("ОК");
            JButton button7 = new JButton("Клиенты");
            JButton button8 = new JButton("Выйти");
            JButton button9 = new JButton("Автозапчасти");
            JButton button10 = new JButton("ОК");
            JButton button11 = new JButton("ОК");
            JButton button12 = new JButton("ОК");
            JButton button13 = new JButton("Покупки");
            JButton button14 = new JButton("Покупки");
            JButton button15 = new JButton("Автозапчасти");
            JButton button16 = new JButton("Клиенты");
            JButton button17 = new JButton("Выйти");
            JButton button18 = new JButton("ОК");
            JButton button19 = new JButton("Сформировать");
            JButton button20 = new JButton("Очистить");
            JButton button21 = new JButton("ОК");




            button.setBounds(95, 270, 120, 30);
            button1.setBounds(650, 25, 120, 30);
            button2.setBounds(80, 450, 200, 30);
            button3.setBounds(850, 10, 100, 30);
            button4.setBounds(685, 115, 100, 30);
            button5.setBounds(700, 260, 100, 30);
            button6.setBounds(685, 410, 100, 30);
            button7.setBounds(450, 10, 150, 30);
            button8.setBounds(850, 10, 100, 30);
            button9.setBounds(450, 10, 150, 30);
            button10.setBounds(685, 115, 100, 30);
            button11.setBounds(685, 260, 100, 30);
            button12.setBounds(685, 410, 100, 30);
            button13.setBounds(630, 10, 150, 30);
            button14.setBounds(630, 10, 150, 30);
            button15.setBounds(450, 10, 150, 30);
            button16.setBounds(630, 10, 150, 30);
            button17.setBounds(850, 10, 100, 30);
            button18.setBounds(685, 115, 100, 30);
            button19.setBounds(630, 420, 140, 30);
            button20.setBounds(790, 420, 140, 30);
            button21.setBounds(620, 260, 90, 30);




            JPanel clientPanel = new JPanel(null);
           

            String[] columnNames2 = {"Код автозапчасти", "Наименование", "Цена", "Количество в наличии"};
            String[][] parts=Base.browseAutoP();

            String[] clientColumnNames = {"Номер телефона","ФИО"};
            String[][] clients=Base.browseClient();

            String[] buyColumnNames={"Номер покупки","Номер телефона","Дата","Код автозапчасти","Количество","Цена"};
            String[][] buys = Base.browseBuy();


            JPanel tab2 = new JPanel(null);


            JPanel phonePanel = new JPanel(null);
            phonePanel.add(clientTextField);
            phonePanel.add(button);
            phonePanel.add(button2);
            phonePanel.add(parolField);
            phonePanel.add(parolLabel);


            phonePanel.add(resultLabel);
            phonePanel.add(tovarLabel);

            DefaultTableModel tovars = new DefaultTableModel(parts, columnNames2);
            DefaultTableModel clienti = new DefaultTableModel(clients, clientColumnNames);
            DefaultTableModel pokupki = new DefaultTableModel(buys, buyColumnNames);


            JTable table2 = new JTable(tovars){
                @Override
                public boolean isCellEditable(int row, int column) {
                    return false; // Полностью запрещает редактирование
                }
            };
            JTable table3 = new JTable(tovars){
                @Override
                public boolean isCellEditable(int row, int column) {
                    return false; // Полностью запрещает редактирование
                }
            };
            JTable table4 = new JTable(tovars){
                @Override
                public boolean isCellEditable(int row, int column) {
                    return false; // Полностью запрещает редактирование
                }
            };

            JTable clientTable = new JTable(clienti){
                @Override
                public boolean isCellEditable(int row, int column) {
                    return false; // Полностью запрещает редактирование
                }
            };
            JTable buyTable = new JTable(pokupki){
                @Override
                public boolean isCellEditable(int row, int column) {
                    return false; // Полностью запрещает редактирование
                }
            };


            JScrollPane scrollPane2 = new JScrollPane(table2);
            JScrollPane scrollPane3 = new JScrollPane(table3);
            JScrollPane scrollPane4 = new JScrollPane(table4);

            JScrollPane clientScrollPane = new JScrollPane(clientTable);
            JScrollPane buyScrollPane = new JScrollPane(buyTable);




            scrollPane3.setBounds(470, 50, 500, 600);
            scrollPane4.setBounds(20, 50, 500, 600);

            clientScrollPane.setBounds(20, 50, 500, 600);
            buyScrollPane.setBounds(20, 50, 500, 600);



            phonePanel.add(scrollPane3);
           


            JPanel adminPanel = new JPanel(new CardLayout());

            JPanel mainAdminPanel = new JPanel(null);
            mainAdminPanel.add(button3);
            mainAdminPanel.add(scrollPane4);
            mainAdminPanel.add(tovarLabel1);
            mainAdminPanel.add(newtovarLabel1);
            mainAdminPanel.add(inputPartField);
            mainAdminPanel.add(button4);
            mainAdminPanel.add(exampleLabel1);
            mainAdminPanel.add(codePartField);
            mainAdminPanel.add(changetovarLabel1);
            mainAdminPanel.add(exampleLabel2);
            mainAdminPanel.add(namePartField);
            mainAdminPanel.add(exampleLabel3);
            mainAdminPanel.add(pricePartField);
            mainAdminPanel.add(exampleLabel4);
            mainAdminPanel.add(button5);
            mainAdminPanel.add(deletetovarLabel1);
            mainAdminPanel.add(deletecodePartField);
            mainAdminPanel.add(exampleLabel5);
            mainAdminPanel.add(button6);
            mainAdminPanel.add(button7);
            mainAdminPanel.add(button14);


            JPanel clientAdminPanel = new JPanel(null);
            clientAdminPanel.add(button8);
            clientAdminPanel.add(button9);
            clientAdminPanel.add(tovarLabel2);
            clientAdminPanel.add(clientScrollPane);
            clientAdminPanel.add(newclientLabel1);
            clientAdminPanel.add(clientexampleLabel1);
            clientAdminPanel.add(inputclientField);
            clientAdminPanel.add(button10);
            clientAdminPanel.add(numberClientField);
            clientAdminPanel.add(exampleLabel6);
            clientAdminPanel.add(changeclientLabel1);
            clientAdminPanel.add(nameClientField);
            clientAdminPanel.add(exampleLabel7);
            clientAdminPanel.add(button11);
            clientAdminPanel.add(deletenumberClientField);
            clientAdminPanel.add(deleteclientLabel1);
            clientAdminPanel.add(exampleLabel8);
            clientAdminPanel.add(button12);
            clientAdminPanel.add(button13);


            JPanel buyAdminPanel = new JPanel(null);
            buyAdminPanel.add(button15);
            buyAdminPanel.add(button16);
            buyAdminPanel.add(button17);
            buyAdminPanel.add(buyLabel2);
            buyAdminPanel.add(buyScrollPane);
            buyAdminPanel.add(newbuyLabel1);
            buyAdminPanel.add(inputbuyField);
            buyAdminPanel.add(buyexampleLabel1);
            buyAdminPanel.add(button18);
            buyAdminPanel.add(reportbuyField);
            buyAdminPanel.add(reportbuyLabel1);
            buyAdminPanel.add(reportexampleLabel1);
            buyAdminPanel.add(button19);
            buyAdminPanel.add(button20);
            buyAdminPanel.add(reportingField);
            buyAdminPanel.add(deletebuyLabel1);
            buyAdminPanel.add(deletebuyField);
            buyAdminPanel.add(deletebuyexampleLabel1);
            buyAdminPanel.add(button21);











            adminPanel.add(mainAdminPanel,"First");
            adminPanel.add(clientAdminPanel,"Second");
            adminPanel.add(buyAdminPanel,"Third");
            CardLayout adminCardLayout = (CardLayout) adminPanel.getLayout();


            clientFrame.add(phonePanel,"First");
            clientFrame.add(clientPanel,"Second");
            clientFrame.add(adminPanel,"Third");

            CardLayout cardLayout = (CardLayout) clientFrame.getContentPane().getLayout();

            button.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e){
                    String inputNumber = clientTextField.getText();
                    long number=0;
                    try{
                    number = Long.parseLong(inputNumber);
                    }catch(NumberFormatException e1){
                        JOptionPane.showMessageDialog(null, "В поле ввода содержатся недопустимые символы.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                    if (number!=0)
                    if (Base.checkClient(number)) {
                        //new clientDisplayFrame(number);
                      //  clientFrame.dispose();
                      String name = Base.nameClient(number);


                      JLabel greetLabel = new JLabel("Добро пожаловать в наш магазин автозапчастей,  "+ name);
                      greetLabel.setBounds(25,25,700,25);
                      greetLabel.setFont(new Font("Arial", Font.BOLD, 14));
                      clientPanel.add(greetLabel);
                        String[] columnNames = {"Номер покупки","Номер телефона","Дата","Код автозапчасти","Количество","Цена"};
                     

                        String[][] data=Base.browseBuy(number);
                      
                    
                      clientPanel.add(button1);
                      JTabbedPane tabbedPane = new JTabbedPane();
                        JPanel tab1 = new JPanel(null);
                      

                     // JLabel buyLabel = new JLabel("Ваши покупки:");
                     // buyLabel.setBounds(25,50,700,25);
                     // buyLabel.setFont(new Font("Arial", Font.BOLD, 18));
                    // tab1.add(buyLabel);
                  //   tab2.add(buyLabel);
                        DefaultTableModel buys = new DefaultTableModel(data, columnNames);
                     

                        JTable table = new JTable(buys){
                            @Override
                            public boolean isCellEditable(int row, int column) {
                                return false; // Полностью запрещает редактирование
                            }
                        };
                     

                        JScrollPane scrollPane = new JScrollPane(table);
                  //      JScrollPane scrollPane3 = new JScrollPane(table2);

                        scrollPane.setBounds(0, 000, 600, 550);
                        scrollPane2.setBounds(0, 000, 600, 550);

                        tab1.add(scrollPane);
                        tab2.add(scrollPane2);

                        

                        tabbedPane.addTab("Ваши покупки",tab1);
                        tabbedPane.addTab("Автозапчасти",tab2);
                        tabbedPane.setBounds(10, 50, 600, 580);
                        clientPanel.add(tabbedPane);

                      cardLayout.show(clientFrame.getContentPane(), "Second");
                    } else {
                        JOptionPane.showMessageDialog(null, "Такого номера нет", "Ошибка", JOptionPane.INFORMATION_MESSAGE);
                    }


                }
            });

            button1.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    clientPanel.removeAll();
                    cardLayout.show(clientFrame.getContentPane(), "First");
                }
            });

            button3.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                 
                    cardLayout.show(clientFrame.getContentPane(), "First");
                }
            });

            button2.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   if(!parolField.getText().isEmpty()){
                    cardLayout.show(clientFrame.getContentPane(), "Third");
                    parolField.setText("");
                   }else{
                    JOptionPane.showMessageDialog(null, "Введите пароль", "Ошибка", JOptionPane.ERROR_MESSAGE);

                   }
                }
            });


            button4.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String input = inputPartField.getText().trim();
    
                    try {
                        int lastSpaceIndex = input.lastIndexOf(" ");
                        if (lastSpaceIndex == -1){ 
                            JOptionPane.showMessageDialog(null, "Некорректный формат данных.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;

                        }
    
                        String nameAndPrice = input.substring(0, lastSpaceIndex).trim();
                        String quantityStr = input.substring(lastSpaceIndex + 1).trim();
    
                        lastSpaceIndex = nameAndPrice.lastIndexOf(" ");
                        if (lastSpaceIndex == -1) {
                            JOptionPane.showMessageDialog(null, "Некорректный формат данных.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;

                        }
    
                        String name = nameAndPrice.substring(0, lastSpaceIndex).trim();
                       
                        String priceStr = nameAndPrice.substring(lastSpaceIndex + 1).trim();


                        if (!name.matches("[А-Яа-яЁё\\s]+")) {
                            JOptionPane.showMessageDialog(null, "Наименование должно содержать только русские буквы.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                
                       
                        float price = Float.parseFloat(priceStr);


                        if (!quantityStr.matches("\\d+")) {
                            JOptionPane.showMessageDialog(null, "Количество должно быть положительным целым числом.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }

                        int quantity = Integer.parseInt(quantityStr);

                        if (quantity <= 0) {
                            JOptionPane.showMessageDialog(null, "Количество должно быть больше нуля.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
    
                        // Вывод результата в консоль
                       // System.out.println("Наименование: " + name);
                        //System.out.println("Цена: " + price);
                        //System.out.println("Количество: " + quantity);
                        Base.insertInAutoP(name, price, quantity);
                        JOptionPane.showMessageDialog(null, "Автозапчасть успешно добавлена!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseAutoP();
                        tovars.setDataVector(updatedParts, columnNames2);
                        inputPartField.setText("");


                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в добавлении автозапчасти: некорректные символы" , "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });


            button5.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String codeP = codePartField.getText().trim();
                   
                    if (codeP.isEmpty()) {
                        JOptionPane.showMessageDialog(null, "Поле с кодом автозапчасти не должно быть пустым.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
                    try {
                        int coding = Integer.parseInt(codeP);
                        String newname = namePartField.getText().trim();
                        if (!newname.matches("[А-Яа-яЁё\\s]+")) {
                            JOptionPane.showMessageDialog(null, "Наименование должно содержать только русские буквы.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        String newprice = pricePartField.getText().trim();
                        if (newname.isEmpty() && newprice.isEmpty()) {
                            JOptionPane.showMessageDialog(null, "Необходимо указать новое наименование или новую цену.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        int l=0;
                       // int p=0;
                        if(!newname.isEmpty()){
                          l =  Base.updateAutoName(coding, newname);
                        }
                        if(!newprice.isEmpty()){
                            try {
                                float pricing = Float.parseFloat(newprice);
                                if (pricing <= 0) {
                                    JOptionPane.showMessageDialog(null, "Цена должна быть положительным числом.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                                    return;
                                }
                              l =  Base.updateAutoPrice(coding, pricing);
                            } catch (NumberFormatException ex) {
                                JOptionPane.showMessageDialog(null, "Некорректный формат цены.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                                return;
                            }
                        }
                        if(l==0){
                            JOptionPane.showMessageDialog(null, "Автозапчасти с таким кодом нет.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        JOptionPane.showMessageDialog(null, "Автозапчасть успешно изменена!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseAutoP();
                        tovars.setDataVector(updatedParts, columnNames2);
                        codePartField.setText("");
                        namePartField.setText("");
                        pricePartField.setText("");

                    } catch (NumberFormatException ex) {
                        JOptionPane.showMessageDialog(null, "Некорректный формат кода автозапчасти.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в добавлении автозапчасти: " + ex.getMessage(), "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });
           

            button6.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String deletecodeP = deletecodePartField.getText().trim();
                    if (deletecodeP.isEmpty()) {
                        JOptionPane.showMessageDialog(null, "Поле с кодом автозапчасти не должно быть пустым.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
                    try {
                        int coding = Integer.parseInt(deletecodeP);
                       
                        int l=0;
                       // int p=0;
                      
                          l =  Base.deleteAutoP(coding);
                        
                        
                        if(l==0){
                            JOptionPane.showMessageDialog(null, "Автозапчасти с таким кодом нет.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        JOptionPane.showMessageDialog(null, "Автозапчасть успешно удалена!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseAutoP();
                        tovars.setDataVector(updatedParts, columnNames2);
                        deletecodePartField.setText("");
                       

                    } catch (NumberFormatException ex) {
                        JOptionPane.showMessageDialog(null, "Некорректный формат кода автозапчасти.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в удалении автозапчасти: " + ex.getMessage(), "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });

            button7.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "Second");
                }
            });
            button9.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "First");
                }
            });
            button8.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                 
                    cardLayout.show(clientFrame.getContentPane(), "First");
                }
            });



            button10.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String input = inputclientField.getText().trim();
    
                    try {
                        // Разделение на части: имя, цена, количество
                        int firstSpaceIndex = input.indexOf(" ");
                        if (firstSpaceIndex == -1) throw new IllegalArgumentException("Некорректный формат данных.");
    
                        String number = input.substring(0, firstSpaceIndex).trim();
                        String name = input.substring(firstSpaceIndex + 1).trim();
    
                        firstSpaceIndex = number.indexOf(" ");
                       if (firstSpaceIndex != -1) throw new IllegalArgumentException("Некорректный формат данных.");
    
                       if (!number.matches("\\d{11}")) {
                        JOptionPane.showMessageDialog(null, "Номер должен содержать ровно 11 цифр.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }

                    if (!name.matches("^[А-Яа-яЁё]+\\s+[А-Яа-яЁё]+\\s+[А-Яа-яЁё]+$")) {
                        JOptionPane.showMessageDialog(null, "Имя должно состоять из трех слов, содержащих только русские буквы.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
    
                       long nubmer = Long.parseLong(number);
                       int a =0;
    
                        a= Base.insertInClient(nubmer, name);
                       if(a<=0){
                        JOptionPane.showMessageDialog(null, "Клиент с таким номером уже существует ", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                       }
                        JOptionPane.showMessageDialog(null, "Клиент успешно добавлен!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseClient();
                        clienti.setDataVector(updatedParts, clientColumnNames);
                        inputclientField.setText("");


                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в добавлении клиента: недопустимые символы", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });


            button11.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String numbert = numberClientField.getText().trim();
                    String namet = nameClientField.getText().trim();
    
                    try {
                        // Разделение на части: имя, цена, количество
                        
    
                       if (!numbert.matches("\\d{11}")) {
                        JOptionPane.showMessageDialog(null, "Номер должен содержать ровно 11 цифр.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }

                    if (!namet.matches("^[А-Яа-яЁё]+\\s+[А-Яа-яЁё]+\\s+[А-Яа-яЁё]+$")) {
                        JOptionPane.showMessageDialog(null, "Имя должно состоять из трех слов, содержащих только русские буквы.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
    
                       long nubmer = Long.parseLong(numbert);
                       int a =0;
    
                        a= Base.updateClientName(nubmer,namet);
                       if(a<=0){
                        JOptionPane.showMessageDialog(null, "Клиент с таким номером не существует ", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                       }
                        JOptionPane.showMessageDialog(null, "Клиент успешно изменен!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseClient();
                        clienti.setDataVector(updatedParts, clientColumnNames);
                        numberClientField.setText("");
                        nameClientField.setText("");


                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в добавлении клиента: недопустимые символы", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });


            button12.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String deletecodeP = deletenumberClientField.getText().trim();
                    if (deletecodeP.isEmpty()) {
                        JOptionPane.showMessageDialog(null, "Поле с номером клиента не должно быть пустым.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
                    try {
                        long number = Long.parseLong(deletecodeP);
                       
                        int l=0;
                       // int p=0;
                      
                          l =  Base.deleteClient(number);
                        
                        
                        if(l==0){
                            JOptionPane.showMessageDialog(null, "Клиента с таким номером нет.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        JOptionPane.showMessageDialog(null, "Клиент успешно удален!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseClient();
                        clienti.setDataVector(updatedParts, clientColumnNames);
                        deletenumberClientField.setText("");
                       

                    } catch (NumberFormatException ex) {
                        JOptionPane.showMessageDialog(null, "Некорректный формат номера клиента.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в удалении клиента: " + ex.getMessage(), "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });

            button13.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "Third");
                }
            });
            button14.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "Third");
                }
            });
            button15.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "First");
                }
            });
            button16.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                   
                    adminCardLayout.show(adminPanel, "Second");
                }
            });

            button17.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                 
                    cardLayout.show(clientFrame.getContentPane(), "First");
                }
            });

            button18.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String input = inputbuyField.getText().trim();
                    try {
                        // Разделение строки на части
                        String[] parts = input.split(" ");
                        if (parts.length != 4) {
                            JOptionPane.showMessageDialog(null, "Неверный формат данных. Укажите: телефон дата код количество.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
    
                        // Присвоение переменных
                        long phoneNumber = Long.parseLong(parts[0]);
                        if (String.valueOf(phoneNumber).length() != 11) {
                            JOptionPane.showMessageDialog(null, "Номер должен содержать ровно 11 цифр.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        
                        if(Base.checkClient(phoneNumber)==false){
                            JOptionPane.showMessageDialog(null, "Ошибка: нет покупателя с таким номером телефона", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;

                        }

                        String date = parts[1];
                        if (!date.matches("\\d{4}-\\d{2}-\\d{2}")) {
                            JOptionPane.showMessageDialog(null, "Дата должна быть в формате гггг-мм-дд.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
    
                        int code = Integer.parseInt(parts[2]);
                        if (String.valueOf(code).length() != 5) {
                            JOptionPane.showMessageDialog(null, "Код должен содержать 5 цифр.", "Ошибка", JOptionPane.ERROR_MESSAGE);

                            return;
                        }

                        if(Base.checkAutoP(code)==false){
                            JOptionPane.showMessageDialog(null, "Ошибка: нет автозапчасти с таким кодом", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;

                        }
    
                        int quantity = Integer.parseInt(parts[3]);
                        if (quantity <= 0) {
                            JOptionPane.showMessageDialog(null, "Количество должно быть положительным числом.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
    
                        // Вывод результатов
                        Base.insertInBuy(phoneNumber, date, code, quantity);
                        JOptionPane.showMessageDialog(null, "Покупка успешно добавлена!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseBuy();
                        pokupki.setDataVector(updatedParts, buyColumnNames);
                        inputbuyField.setText("");

                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка: некорректные символы", "Ошибка ввода", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });

            button19.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String input = reportbuyField.getText().trim();
                    String[] parts = input.split(" ", 4); // Разбиваем строку на максимум 4 части
    
                    if (parts.length < 3) {
                        JOptionPane.showMessageDialog(null, "Ошибка: Введите код, начальную и конечную даты.", "Ошибка ввода", JOptionPane.ERROR_MESSAGE);

                        return;
                    }
    
                    try {
                        // Получаем значения
                        String partCode = (parts[0]);
                        int partCodes = Integer.parseInt(parts[0]);
                        String startDate = parts[1];
                        String endDate = parts[2];
    
                        // Проверки
                        if (String.valueOf(partCode).length() != 5) {
                            JOptionPane.showMessageDialog(null, "Ошибка: Код автозапчасти должен быть числом из 5 цифр.", "Ошибка ввода", JOptionPane.ERROR_MESSAGE);

                            return;
                        }
    
                        if (!isValidDate(startDate) || !isValidDate(endDate)) {
                            JOptionPane.showMessageDialog(null, "Ошибка: Дата должна быть в формате гггг-мм-дд.", "Ошибка ввода", JOptionPane.ERROR_MESSAGE);

                            return;
                        }
                        if(Base.checkAutoP(partCodes)==false){
                            JOptionPane.showMessageDialog(null, "Ошибка: нет автозапчасти с таким кодом", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;

                        }
                        // Успешная обработка
                    //    System.out.println("Данные приняты: " +
                    //             "Код запчасти: " + partCode +
                    //             ", Начальная дата: " + startDate +
                    //             ", Конечная дата: " + endDate);
                    //System.out.println(Base.reportAutoP(partCode, startDate, endDate));
                  //  reportingField.setText(Base.reportAutoP(partCode, startDate, endDate));
                  String[][] updatedParts = Base.reportAutoP(partCode, startDate, endDate);
                  pokupki.setDataVector(updatedParts, buyColumnNames);
                  reportingField.setText(Base.salesReport(partCode, startDate, endDate));
                    } catch (NumberFormatException ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка: Код автозапчасти должен быть числом.", "Ошибка ввода", JOptionPane.ERROR_MESSAGE);

                    }
                }
            });

            

            button20.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String[][] updatedParts = Base.browseBuy();
                    pokupki.setDataVector(updatedParts, buyColumnNames);
                   reportbuyField.setText("");
                   reportingField.setText("");

                }
            });

            button21.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String deletecodeP = deletebuyField.getText().trim();
                    if (deletecodeP.isEmpty()) {
                        JOptionPane.showMessageDialog(null, "Поле с номером клиента не должно быть пустым.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                        return;
                    }
                    try {
                        int number = Integer.parseInt(deletecodeP);
                       
                        int l=0;
                       // int p=0;
                      
                          l =  Base.deleteBuy(number);
                        
                        
                        if(l==0){
                            JOptionPane.showMessageDialog(null, "Покупки с таким номером нет.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                            return;
                        }
                        JOptionPane.showMessageDialog(null, "Покупка успешно удалена!", "Успех", JOptionPane.INFORMATION_MESSAGE);
                        String[][] updatedParts = Base.browseBuy();
                        pokupki.setDataVector(updatedParts, buyColumnNames);
                        deletebuyField.setText("");
                       

                    } catch (NumberFormatException ex) {
                        JOptionPane.showMessageDialog(null, "Некорректный формат номера покупки.", "Ошибка", JOptionPane.ERROR_MESSAGE);
                    } catch (Exception ex) {
                        JOptionPane.showMessageDialog(null, "Ошибка в удалении покупки: " + ex.getMessage(), "Ошибка", JOptionPane.ERROR_MESSAGE);
                    }
                }
            });

            clientFrame.setVisible(true);
        } 
    }

public static boolean isValidDate(String date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        sdf.setLenient(false);
        try {
            sdf.parse(date);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }
    
    public static void main(String[] args) {
        if(!Base.isDatabaseInitialized()){
            Base.createBase();
           Base.insertBaseValues();
        }
       // Base.browseBuy();
        new clientFrame();
        
    }
}
