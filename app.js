//quotes array conatinain g array of objects of quotes and people 

const quote_array=[{
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall',
    person:'Nelson Mendela'
},

{
    quote:'The way to get started is to quit talking and begin doing',
    person:'Walt Disney'
},
{
    quote:'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success',
    person:'James Cameron'
},
{
    quote:'When you reach the end of your rope, tie a knot in it and hang on',
    person:'Franklin D. Roosevelt'
},

{
    quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    person:'Benzamin Franklin'
},

{
    quote:'Dont run behind the money,rather run behhind the value',
    person:'Joyesh Debnath'
},

{
    quote:'Only a life lived for others is a life worthwhile',
    person:'Albert Einstein'
}
];

const  btn=document.querySelector('#quote_btn');//button 

const quote=document.querySelector('#quote');//h2 within blockquote 

btn.addEventListener('click', generate);

function generate()
{
    const random_val=Math.floor(Math.random()*quote_array.length);
   // console.log(random_val);
   quote.innerHTML=quote_array[random_val].quote;//accessing the quote at the particular index val 
   document.getElementById('person_name').innerHTML=quote_array[random_val].person;
   document.getElementById('person_name').style.color='#33658A';

   quote.style.color='#D64550';
}
