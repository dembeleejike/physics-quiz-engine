
console.log('Hello World!');
/*
const Inputs = document.querySelector('.js-iput');
 
function Check (examine) {
 let selected = document.querySelector('input[name="username"]:checked');
 if (!selected){
  alert('please choose something ');
  return;
 }
 if (selected.value === examine){
  alert('Bravo');
 }else{alert('Wrong')
  
 };
selected.checked = false;
}
*/
/*
let List = [
  {
    question: 'What is my name?',
    options: ['Dembele', 'Desmond', 'Emmanuel', 'Eugene'],
    answer: 'Dembele'
  },
  {
    question: 'What level am I?',
    options: ['100L', '200L', '300L', '400L'],
    answer: '100L'
  }
];

let currentQuestion = 0;
let general = document.querySelector('.overallContent');

const questionParagraph = document.querySelector('.Js-question');
const questionInput = document.querySelector('.Js-inputs');

function loadQuestion() {
  // clear previous options
  questionInput.innerHTML = '';

  // set question text
  questionParagraph.textContent = List[currentQuestion].question;

  // create options
  List[currentQuestion].options.forEach(option => {
    const label = document.createElement('label');
    label.classList.add('inputLabel')
    const input = document.createElement('input');
    input.classList.add('radioInputs');
    

    input.type = 'radio';
    input.name = 'answer';   // same name = toggle works
    input.value = option;
    
    label.appendChild(input);
    label.append(option);
    questionInput.appendChild(label);
    questionInput.appendChild(document.createElement('br'));
    
  });
 let mainDiv = document.createElement('div');
    mainDiv.classList.add('container');
    let Button1 = document.createElement('button');
    Button1.classList.add('leftButton');
    Button1.innerHTML = 'Check';
   let Button2 = document.createElement('button');
   Button2.classList.add('rightButton');
   Button2.innerHTML = 'Next';
   
    mainDiv.append(Button1,Button2);
    questionInput.append(mainDiv);
 
}

    
loadQuestion();
/*
/*
function check(){
 if (document.querySelector('input[name="answer"]:checked')){
  alert('shoc som')
  
 }
}
*/

// feedback variable
/*const message = document.createElement('p');
message.textContent = 'Bravo 👏🏿';
message.style.color = 'green';
questionInput.append(message);
*/
let score = {
 correct: 0,
 incorrect: 0
};



/*  {
    question: 'What is my name?',
    options: ['Dembele', 'Desmond', 'Emmanuel', 'Eugene'],
    answer: 'Dembele',
    answered: false
  },
  {
    question: 'What level am I?',
    options: ['100L', '200L', '300L', '400L'],
    answer: '100L',
    answered: false
  },
  {
   question: 'Which State am I from?',
    options: ['Anambra','Imo', 'Abia', 'Enugu'],
    answer: 'Anambra',
    answered: false
  }
  */
  let List = [
  {
  question: 'Which relation correctly connects the period of vibration T with radius a, density ρ and surface tension γ?',
  options: [

  'T = k a^(3/2) ρ^(1/2) γ^(-1/2)',
  'T = k a^(1/2) ρ^(3/2) γ^(-1/2)',
  'T = k a^(3/2) ρ^(-1/2) γ^(1/2)',
  'T = k a^(1) ρ^(1/2) γ^(-1)',
  'T = k a^(2) ρ^(1/2) γ^(-1/2)'

  ],
  answer: 'T = k a^(3/2) ρ^(1/2) γ^(-1/2)',
  answered: false
},
{
  question: 'The drag force F of a car moving through air depends on velocity v, air density ρ, and cross-sectional area A. If F = k ρ^x v^(2y) A^z, find x, y and z.',
  options: [
    '1, 1, 1',
    '1/2, 1/2, 1/2',
    '1, -1, 1',
    '1, 0, 1'
  ],
  answer: '1, 1, 1',
  answered: false
}
];


let currentQuestion = 0;
let general = document.querySelector('.overallContent');

const questionParagraph = document.querySelector('.Js-question');
const questionInput = document.querySelector('.Js-inputs');


function loadQuestion() {
  questionInput.innerHTML = '';

  const current = List[currentQuestion];
  questionParagraph.textContent = current.question;

  current.options.forEach(option => {
    const label = document.createElement('label');
    label.classList.add('inputLabel');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    input.classList.add('radioInputs');

    label.append(input, option);
    questionInput.append(label, document.createElement('br'));
  });

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('container');

  const checkBtn = document.createElement('button');
  checkBtn.classList.add('leftButton')
  checkBtn.textContent = 'Check';

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('rightButton')
  nextBtn.textContent = 'Next';
  nextBtn.disabled = true;

checkBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  nextBtn.disabled = false;

  if (!selected) {
    alert('Select an option first');
    return;
  }

  // 🔒 STOP double scoring
  if (List[currentQuestion].answered) {
    return;
  }

  if (selected.value === List[currentQuestion].answer) { 
    
    alert('Bravo👏🏿');
    signal(currentQuestion);
    
    
    score.correct++;
    console.log(score);
    console.log(selected);
  } else {
    
    alert('Wrong ❌ ')
    signal(currentQuestion);


/*
if (selected.value === List[currentQuestion].answer) {
  score.correct++;
  alert('Bravo👏🏿');
  
} else {
  score.incorrect++;
  alert('Wrong ❌');
}*/

    score.incorrect++;
    console.log(score);
  }

  // mark as answered
  List[currentQuestion].answered = true;

  // optional UX improvement
  document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.disabled = true;
  });
});
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < List.length) {
      loadQuestion();
    } else {
      questionParagraph.textContent = 'Quiz completed 🎉';
      result();
      questionInput.innerHTML = '';
    }
  });

  mainDiv.append(checkBtn, nextBtn);
  questionInput.append(mainDiv);
  
}
loadQuestion();

/*function signal() {
  const selected = document.querySelector('input[name="answer"]:checked');

  // highlight correct answer
  const correctInput = Array.from(document.querySelectorAll('input[name="answer"]'))
    .find(input => input.value === List[currentQuestion].answer);

  if (correctInput) {
   
    
    correctInput.parentElement.style.backgroundColor = 'green';
  }

  // highlight wrong selection if user picked incorrectly
  if (selected && selected.value !== List[currentQuestion].answer) {
    selected.parentElement.style.backgroundColor = 'red';
  }

  console.log(selected);
}
*/
function signal(questionIndex) {
  const selected = document.querySelector('input[name="answer"]:checked');

  const correctInput = Array.from(
    document.querySelectorAll('input[name="answer"]')
  ).find(input =>
    input.value === List[questionIndex].answer
  );

  if (correctInput) {
    correctInput.parentElement.style.backgroundColor = 'green';
  }

  if (selected && selected.value !== List[questionIndex].answer) {
    selected.parentElement.style.backgroundColor = 'red';
  }
}

function result(){
  let winScore = document.querySelector('.js-score');
  let looseScore = document.querySelector('.js-loss');
  
  winScore.innerHTML = `correct: ${score.correct}`;
  looseScore.innerHTML = `Incorrect: ${score.incorrect}`;
}



/*
const selected = document.querySelector('input[name="answer"]:checked');
function signal(){
  
  let good = List[currentQuestion].answer;
    
if  (selected){
good.style.backgroundColor = 'green';

  
}
console.log(selected);

}
*/


List.push(
{question:'The derived dimension [ML-1T-2] is a dimension of?',

 options:['Force', 'Momentum', 'Pressure', 'Work'],
 answer: 'Pressure',
 answered: false},
 
{question: 'The derived dimension [ML2T-2] is a dimension of?',
options: ['Force', 'Impulse', 'Pressure', 'Work'],
answer: 'Work',
answered: false
},
{
  question: 'What are the correct dimensions for energy and force?',
  options: [
    'MLT-1, MLT',
    'ML2T-2, MLT-2',
    'ML-3T, MLT2',
    'ML2T-2, ML2T2'
  ],
  answer: 'ML2T-2, MLT-2',
  answered: false
},
{
  question: 'Identify the correct dimension for density and pressure.',
  options: [
    'ML-3, ML-1T-2',
    'ML-1T-2, ML-3',
    'ML-2, ML-1T-2',
    'ML3, ML-1T2'
  ],
  answer: 'ML-3, ML-1T-2',
  answered: false
},
{
  question: 'The derived dimension [ML2T-2] is a dimension of which of the following? (i) acceleration (ii) torque (iii) energy',
  options: [
    '(i) only',
    '(iii) only',
    '(i) and (ii) only',
    '(ii) and (iii) only'
  ],
  answer: '(ii) and (iii) only',
  answered: false
},
{
  question: 'Which of the following quantities are derived quantities?',
  options: [
    '(i), (ii), (iii) and (v)',
    '(iv), (v), (vi) and (v)',
    '(iv), (vi) and (vii)',
    'All of the above'
  ],
  answer: '(iv), (vi) and (vii)',
  answered: false
},
{
  question: 'Which of the following are derived units?',
  options: [
    '(i) and (iii) only',
    '(ii) and (v) only',
    '(ii), (iv), and (v) only',
    'All of them'
  ],
  answer: '(ii) and (v) only',
  answered: false
},
{
  question: 'Which of the following are derived quantities?',
  options: [
    '(i) and (iv) only',
    '(ii), (iii) and (iv) only',
    '(i), (iii) and (iv) only',
    'All of them'
  ],
  answer: '(i), (iii) and (iv) only',
  answered: false
},
{
  question: 'The watt is equivalent to which of the following?',
  options: [
    'Nms-1',
    'Js',
    'kgm2s-2',
    'Ns'
  ],
  answer: 'Nms-1',
  answered: false
},
{
  question: 'The unit of momentum is',
  options: [
    'Js-1',
    'Ns',
    'Ns-1',
    'Nms'
  ],
  answer: 'Ns',
  answered: false
},
{
  question: 'Which of the following quantities has the same unit as the kilowatt hour?',
  options: [
    'force × acceleration',
    'force × velocity',
    'force × distance'
  ],
  answer: 'force × distance',
  answered: false
},
{
  question: 'Which of the following is a set of vectors?',
  options: [
    'weight, displacement and moment',
    'velocity, volume and upthrust',
    'density, capacitance and distance',
    'mass, force and impulse'
  ],
  answer: 'weight, displacement and moment',
  answered: false
},
{
  question: 'Which of the following is not a fu=== ndamental S.I. unit?',
  options: [
    'meter',
    'ampere',
    'mole',
    'newton'
  ],
  answer: 'newton',
  answered: false
},
{
  question: 'Which of the following is not a unit of power?',
  options: [
    'joule/second',
    'ampere-volt',
    'ampere/volt',
    'volt²/ohms'
  ],
  answer: 'ampere/volt',
  answered: false
},
{
  question: 'Which of the following is a derived unit?',
  options: [
    'kilogram',
    'meter',
    'kelvin',
    'joule'
  ],
  answer: 'joule',
  answered: false
},
{
  question: 'Which of the following is equivalent to kg m/s?',
  options: [
    'J/s',
    'N/s',
    'Ns',
    'Nms'
  ],
  answer: 'Ns',
  answered: false
},
{
  question: 'The product of pressure and volume (PV) has the same unit as',
  options: [
    'density',
    'power',
    'momentum',
    'energy'
  ],
  answer: 'energy',
  answered: false
},
{
  question: 'Convert the speed 108 km/hr to m/s.',
  options: [
    '90 m/s',
    '45 m/s',
    '30 m/s',
    '60 m/s'
  ],
  answer: '30 m/s',
  answered: false
},
{
  question: 'Convert the speed 180 km/hr to m/s.',
  options: [
    '100 m/s',
    '50 m/s',
    '150 m/s',
    '60 m/s'
  ],
  answer: '50 m/s',
  answered: false
},
{
  question: 'Change the speed 0.2 cm/s to kilometers per year.',
  options: [
    '4.2 km/y',
    '63.2 km/y',
    '36.4 km/y',
    '24.5 km/y'
  ],
  answer: '63.2 km/y',
  answered: false
},
{
  question: 'A quantity with magnitude but no specified direction is',
  options: [
    'vector',
    'scalar',
    'vectorial',
    'scalar'
  ],
  answer: 'scalar',
  answered: false
},

{
  question: 'Given that the period of oscillation of a pendulum is T = k m^x l^y g^z, which of the following is correct?',
  options: [
    'T = k √(l/g)',
    'T = (2/π) √(l/g)',
    'T = 2π √(l/g)',
    'T = (2/π) √'
  ],
  answer: 'T = k √(l/g)',
  answered: false
},
{
  question: 'A body of mass M rests on a plane inclined at an angle α to the horizontal. The component of the weight of the body along the normal to the plane is',
  options: [
    'Mg sin α',
    'Mg cos α',
    'Mg tan α',
    'Mg / sin α'
  ],
  answer: 'Mg cos α',
  answered: false
},
{
  question: 'A car travels 20.0 km due north and then 35.0 km in a direction 60° west of north. Find the magnitude and direction of the car’s resultant displacement.',
  options: [
    '48.2 km, 39°',
    '53.3 km, 39°',
    '48.2 km, 51°',
    '53.3 km, 51°'
  ],
  answer: '48.2 km, 39°',
  answered: false
},
{
  question: 'A particle undergoes three consecutive displacements given by d₁ = (i + 3j − k), d₂ = (2i − j − 3k) and d₃ = (−i + j). Find the resultant displacement of the particle.',
  options: [
    '5.39',
    '8.31',
    '4.34',
    '4.45'
  ],
  answer: '5.39',
  answered: false
},
{
  question: 'A car is driven north east for 40 km, then north west for 50 km and then south for 30 km. Determine the resultant displacement of the car.',
  options: [
    '34.38 km, 78.12° N of W',
    '56.5 km, 56.3° N of W',
    '93.91 km, 85.7° N of W',
    '78.3 km, 34.3° N of W'
  ],
  answer: '34.38 km, 78.12° N of W',
  answered: false
},
{
  question: 'Can the magnitude of Cristiano Ronaldo’s displacement on the pitch be greater than the distance travelled?',
  options: [
    'Yes',
    'No',
    'Maybe',
    'It depends on the conditions'
  ],
  answer: 'No',
  answered: false
},
{
  question: 'Two vectors are given by A = 3i + 2j and B = −i − j. Calculate the value of A + B.',
  options: [
    '4i + 3j',
    '2i + j',
    '2i − 4j',
    '2i + 3j'
  ],
  answer: '2i + j',
  answered: false
},
{
  question: 'A runner makes one lap around a 200 m track in a time of 25 s. What is the runner’s average speed?',
  options: [
    '8 m/s',
    '4 m/s',
    '2 m/s',
    '0 m/s'
  ],
  answer: '8 m/s',
  answered: false
},
{
  question: 'A runner makes one lap around a 200 m track in a time of 25 s. What is the runner’s average velocity?',
  options: [
    '8 m/s',
    '4 m/s',
    '2 m/s',
    '0 m/s'
  ],
  answer: '0 m/s',
  answered: false
},
{
  question: 'Each of the following quantities is classified as scalar or vector. Choose the correct classification.',
  options: [
    'Pressure – Scalar',
    'Electric potential – Scalar',
    'Impulse – Vector',
    'Heat capacity – Scalar'
  ],
  answer: 'Electric potential – Scalar',
  answered: false
},
{
  question: 'CD represents?',
  options: [
    'Uniform acceleration',
    'Uniform velocity',
    'Uniform deceleration',
    'Non-uniform velocity'
  ],
  answer: 'Uniform deceleration',
  answered: false
},
{
  question: 'O2 is the',
  options: [
    'Final velocity',
    'Minimum velocity',
    'Initial velocity',
    'Maximum velocity'
  ],
  answer: 'Maximum velocity',
  answered: false
},
{
  question: 'OD is the',
  options: [
    'Total time taken',
    'Total distance covered',
    'Maximum velocity attained',
    'Minimum time'
  ],
  answer: 'Total time taken',
  answered: false
},
{
  question: 'At BC the acceleration is',
  options: [
    'Maximum',
    'Minimum but greater than 0',
    'Equal to 0',
    'Negative'
  ],
  answer: 'Equal to 0',
  answered: false
},
{
  question: 'The area BCEF is the',
  options: [
    'Total distance covered',
    'Distance covered while accelerating',
    'Distance covered at constant velocity',
    'Distance covered when the acceleration is at maximum'
  ],
  answer: 'Distance covered at constant velocity',
  answered: false
},
{
  question: 'The distance covered while decelerating is represented by the shape',
  options: [
    'OAG',
    'ABFG',
    'BCFE',
    'CDE'
  ],
  answer: 'CDE',
  answered: false
},
{
  question: 'What are the values of the velocity and acceleration at BC respectively?',
  options: [
    'O1 and 0',
    'O2 and maximum',
    'O2 and 0',
    'O1 and maximum'
  ],
  answer: 'O2 and 0',
  answered: false
},
{
  question: 'The deceleration is represented by',
  options: [
    'OA',
    'AB',
    'ED',
    'CD'
  ],
  answer: 'CD',
  answered: false
},
{
  question: 'The total time taken is',
  options: [
    'OG',
    'OD',
    'FE',
    'ED'
  ],
  answer: 'OD',
  answered: false
},
{
  question: 'The total distance covered is represented by',
  options: [
    'Area BCEF',
    'Area CED',
    'Area OABCE',
    'Area OABCD'
  ],
  answer: 'Area OABCD',
  answered: false
},
{
  question: 'A car moving at a uniform speed of 60 m/s is suddenly brought to a halt in 20 s. What is the final velocity of the car?',
  options: [
    '0 m/s',
    '30 m/s',
    '60 m/s',
    '120 m/s'
  ],
  answer: '0 m/s',
  answered: false
},
{
  question: 'A car moving at a uniform speed of 60 m/s is suddenly brought to a halt in 20 s. What is the acceleration of the car?',
  options: [
    '3 m/s²',
    '0 m/s²',
    '6 m/s²',
    '-3 m/s²'
  ],
  answer: '-3 m/s²',
  answered: false
},
{
  question: 'A car moving at a uniform speed of 60 m/s is suddenly brought to a halt in 20 s. What is the total distance covered?',
  options: [
    '150 m',
    '300 m',
    '600 m',
    '1200 m'
  ],
  answer: '600 m',
  answered: false
},
{
  question: 'If the car covers 1200 m before stopping, what is the time taken?',
  options: [
    '20 s',
    '40 s',
    '60 s',
    '100 s'
  ],
  answer: '40 s',
  answered: false
},
{
  question: 'An egg falls from a nest at a height of 4 m. What speed will it have when it is 1 m from the ground? Neglect air resistance and take g = 9.8 m/s².',
  options: [
    '7.1 m/s',
    '4.43 m/s',
    '58.8 m/s',
    '7.67 m/s'
  ],
  answer: '7.67 m/s',
  answered: false
},
{
  question: 'A car of mass 100 kg accelerates from rest to a speed of 25 m/s in a time of 8.0 s. What is the average power produced?',
  options: [
    '7.1 kW',
    '4.43 kW',
    '47 kW',
    '7.67 kW'
  ],
  answer: '7.67 kW',
  answered: false
},
{
  question: 'A 4 kg block is pushed a distance 5 m along a level floor at constant speed by a 20 N force along a horizontal path. The coefficient of friction between the block and the floor is 0.25. How much work is done?',
  options: [
    '392 J',
    '0 J',
    '584.4 J',
    '58 J'
  ],
  answer: '0 J',
  answered: false
},
{
  question: 'The force generated from the engine of a car is 300 N. Calculate the power developed when the car moves with a constant speed of 5 m/s.',
  options: [
    '7.1 W',
    '4.43 W',
    '1500 W',
    '7.67 W'
  ],
  answer: '1500 W',
  answered: false
},
{
  question: 'A boy 20 m tall carries a load of 20 kg on his head by exerting a force of 200 N on the load for 40 s. What is the work done by the boy?',
  options: [
    '0 J',
    '200 J',
    '2000 J',
    '4000 J'
  ],
  answer: '0 J',
  answered: false
},
{
  question: 'A ball of mass 0.1 kg is thrown vertically upward with an initial velocity of 20 m/s. Calculate the potential energy halfway up.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '10 J',
  answered: false
},
{
  question: 'Potential energy at maximum height of the ball.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '20 J',
  answered: false
},
{
  question: 'Potential energy as the ball leaves the ground.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '0 J',
  answered: false
},
{
  question: 'Kinetic energy halfway up.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '20 J',
  answered: false
},
{
  question: 'Kinetic energy as it leaves the ground.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '10 J',
  answered: false
},
{
  question: 'Kinetic energy at the maximum height.',
  options: [
    '10 J',
    '20 J',
    '0 J',
    '5 J'
  ],
  answer: '0 J',
  answered: false
},
{
  question: 'A concrete slab weighing 1500 N is loaded into a trailer using a plank inclined at 15° with a coefficient of dynamic friction of 0.3. Calculate the work done on the slab.',
  options: [
    'N/A (numerical problem)',
    'N/A',
    'N/A',
    'N/A'
  ],
  answer: 'N/A',
  answered: false
},
{
  question: 'Work output for the inclined plane.',
  options: [
    'N/A',
    'N/A',
    'N/A',
    'N/A'
  ],
  answer: 'N/A',
  answered: false
},
{
  question: 'Efficiency of the inclined plane.',
  options: [
    '47.2%',
    '50%',
    '60%',
    '40%'
  ],
  answer: '47.2%',
  answered: false
},
{
  question: 'If the speed of an object is doubled, the kinetic energy is',
  options: [
    'Halved',
    'Doubled',
    'Tripled',
    'Quadrupled'
  ],
  answer: 'Quadrupled',
  answered: false
},
{
  question: 'A 15 kg object initially at rest is raised to a height of 8 m by a force of 100 N. What is the velocity of the object at this height?',
  options: [
    '7.5 m/s',
    '8 m/s',
    '10 m/s',
    '5 m/s'
  ],
  answer: '7.5 m/s',
  answered: false
},
{
  question: 'A boy pulls a wagon with a force of 45 N using a rope at an angle of 40° with the ground. How much work does he do in moving the wagon 50 m?',
  options: [
    '172 kJ',
    '150 kJ',
    '200 kJ',
    '100 kJ'
  ],
  answer: '172 kJ',
  answered: false
},
{
  question: 'An 800 kg car moving at 6 m/s coasts down a hill 40 m high. The brakes are applied so that the speed at the bottom is 20 m/s. How much energy was lost to friction?',
  options: [
    'N/A',
    'N/A',
    'N/A',
    'N/A'
  ],
  answer: 'N/A',
  answered: false
},
{
  question: 'A mechanic pushes a 200 kg car from rest to 3 m/s over 30 m. Determine the work done by the machine.',
  options: [
    '9000 J',
    '6000 J',
    '12000 J',
    '3000 J'
  ],
  answer: '9000 J',
  answered: false
},
{
  question: 'The horizontal force exerted on the car in the previous problem.',
  options: [
    '300 N',
    '200 N',
    '400 N',
    '150 N'
  ],
  answer: '300 N',
  answered: false
},
{
  question: 'An object of mass 5 kg is held at a height of 1 m above the ground for 15 seconds. What is the work done within this period?',
  options: [
    '30 J',
    '20 J',
    '50 J',
    '0 J'
  ],
  answer: '0 J',
  answered: false
}
);