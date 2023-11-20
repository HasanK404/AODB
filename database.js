import  mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "aodb"
  }).promise()


export async function Airlines(){
     const [result] = await pool.query("SELECT * FROM airlines")
    return(result)
  }

 export async function Arrivals(){
    const [result] = await pool.query("SELECT * FROM aodb.inboundflights")
   return(result)
 }
 


 /*const Air = await Airlines()
  const Arv = await Arrivals()
  console.log(Air)
  console.log(Arv)



export async function Airlines(){
  con.connect(function(err) {
      con.query("SELECT * FROM airlines", function (err, result, fields) {
        return(result);
      });
    });
}

export async function Arrivals(){
    con.connect(function(err) {
        con.query("SELECT * FROM aodb.inboundflights", function (err, result, fields) {
          return(result);
        });
      });
 }
*/
