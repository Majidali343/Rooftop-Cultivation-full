const express = require('express')


const connection = require('../Config/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;





// This is Register/Signup API

exports.signup = async (req, res) => {
  const bodypassword = req.body.password;
  const encryptedPassword = await bcrypt.hash(bodypassword, saltRounds)

  const signUpquery = 'INSERT INTO `users`( `First_name`, `last_name`, `email`, `password`, `user_type`, `city`,`phone`) VALUES (?,?,?,?,?,?,?);';
  // Value to be inserted 

  let id = req.body.id;
  let First_name = req.body.First_name;
  let last_name = req.body.last_name;
  let password = encryptedPassword;
  let email = req.body.email;
  let user_type = req.body.user_type;
  let city = req.body.city;
  let phone = req.body.phone;

  // Value to be inserted 

  // Creating queries 
  if (First_name  && last_name  && email  && password  && user_type  && city && phone ) {

    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], async (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: 'Internal server error.' });
      }

      if (results.length > 0) {
        return res.json({ status: true, message: 'Email already registered.' });
      } else {

        connection.query(signUpquery, [First_name, last_name, email, password, user_type, city, phone], (err, rows) => {
          if (!err) {
            return res.json({
              status: true,
              message: "Wellcome!!!........Your Successsfully signUp"
            })


          }else {
            console.log(err);

          }
        });

      }
    });


  } else {
    res.json({
      status: false,
      Message: "some data is missing"
    })
  }

}



exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: false, message: 'Please provide both email and password.' });
  }

  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], async (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: 'Internal server error.' });
      }

      if (results.length > 0) {
        const match = await bcrypt.compare(password, results[0].password);
        if (match) {
      
          req.session.user = results[0].id

          return res.json({
            status: true,
            message: 'Welcome. You are successfully logged in.',
            user_id: results[0].id,
            user_type: results[0].user_type,
            user_name: results[0].First_name + ' ' + results[0].last_name,
          });
        } else {
          return res.status(400).json({ status: false, message: 'Incorrect password.' });
        }
      } else {
        return res.status(404).json({ status: false, message: 'User not found.' });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: 'Internal server error.' });
  }
};


