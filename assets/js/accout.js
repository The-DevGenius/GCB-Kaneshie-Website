/**
   * Initiate pURE cOUNTER
   */
 new PureCounter();
 /**
  * Mobile nav toggle with AJAX
  */
 
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
  
      // Send AJAX request to server
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/path/to/server/script.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      xhr.send('mobileNavToggle=true');
    });
  });
  
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }
  const MongoClient = require('mongodb').MongoClient;
 
  // Replace the connection string with your own MongoDB connection string
  const url = 'mongodb://localhost:27017/mydatabase';
  
  // Define the customer record to insert
  const customer = {
    name: 'David Ayim Obuobi',
    email: 'ayimobuobi@gmail.com',
    phone: '0551784926'
  };
  
  // Connect to the MongoDB database
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
  
    // Select the "customers" collection
    const db = client.db('mydatabase');
    const collection = db.collection('customers');
  
    // Insert the customer record
    collection.insertOne(customer, function(err, result) {
      if (err) throw err;
  
      console.log('Customer record inserted:', result.ops[0]);
      client.close();
    });
  });