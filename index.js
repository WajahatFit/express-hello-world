const express = require('express');
// This document is a JSON file with student data that will serve as a fake API for the exercises
const fakeApi = require('./data');

const app = express();

/* Your code goes here */
app.get('/', (req, res)=> {
    res.send('<h1>hello world!</h1>')
})

app.get('/loan', (req,res) => {
    let hasLoanT = [];
    fakeApi.forEach(student => {
        if (student.hasLoan){
            hasLoanT.push(student)
        }
    })
    res.send(hasLoanT);
    
});

app.get('/source', (req, res) => {
    let num = (2/fakeApi.length)
    num.toFixed(2);
    res.send(`<h2>The group's average score is ${num}</h2>`);
    })
    
    



// Server listening
app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));