//cài đặt thư viện
//npm install express
//npm install body-parser
//npm install mysql
//npm install cors --save
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');

//tạo đối tượng mới
const app = express();
//chuyển về dạng json
app.use(bodyparser.json()); 
//sử dụng thư viện cors
app.use(cors());

//kết nối
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : 3306,
  database : 'dbsong'
});
connection.connect();

//câu lệnh select
app.get('/data',(req,res)=>{
    var sql = "select * from tbinforsong ORDER BY id ASC ";
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);// gửi kết quả cho react native
    })
})

//câu lệnh them
app.post('/data',(req,res)=>{
    console.log(req.body);
    var data = { id:req.body.id, title:req.body.title, singer:req.body.singer,
                publication:req.body.publication, image:req.body.image};
    var sql = "insert into tbinforsong set ?";
    connection.query(sql,data,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({
            status:'Dữ liệu đã gửi thành công !',
            id:req.body.id, 
            title:req.body.title, 
            singer:req.body.singer,
            publication:req.body.publication, 
            image:req.body.image
        });// gửi kết quả cho react native
    });
});


//cau lenh xoa
app.post('/delete', (req, res) => {
    var sql = "DELETE FROM tbinforsong "
            + "WHERE id='"+req.body.id+"'";
    connection.query(sql, (err, results)=> {
      if (err) throw err;
      res.send({news: results});
    });
  });

//cau lenh sua
app.post('/update', (req, res) => {
    console.log(req.body);
    var sql = "UPDATE tbinforsong SET "
            +   "title='"+req.body.title+"',"
            +   "singer='"+req.body.singer+"',"
            +   "publication='"+req.body.publication+"',"
            +   "image='"+req.body.image+"' "
            + "WHERE id='"+req.body.id+"'";
    connection.query(sql, (err, results)=> {
        if(err) throw err;
        console.log(results);
        res.send({
            status:'Dữ liệu đã gửi thành công !',
            id:req.body.id, 
            title:req.body.title, 
            singer:req.body.singer,
            publication:req.body.publication, 
            image:req.body.image
        });// gửi kết quả cho react native
    });
  });

// chạy .
app.listen(3001, () => {
    console.log('server đang chạy ở cổng 3001');
   });
   