for(var i = 1; i <= 3; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}
/** Output
  4
  4
  4
 Because:
 var i → one variable
 Stored in global / function scope
 setTimeout callback runs after loop finishes
 At that time, i === 4
 So all callbacks read the same variable.
*/
// To fix this issue we can do it by replacing var key with fix ;
for(let i = 1; i <= 3; i++){
    setTimeout(() =>{
        console.log(i);
    },1000)
}
/** Output
  1
  2
  3

  Most people say:
  - “Because let is block scoped”(❌ Wrong explanation)

✔️ Correct explanation below:
For let (and const) inside a for loop:

Each iteration gets its own NEW lexical environment
What does that mean?
Iteration 1 → i₁ = 1
Iteration 2 → i₂ = 2
Iteration 3 → i₃ = 3
These are not the same variable.
They are distinct bindings, created automatically by the engine.

-------------------------------------------------------------------------------------------
PART 5 — Step-by-step runtime model (DRAW THIS)
Iteration 1
LexicalEnv#1
└── i = 1

Callback closes over LexicalEnv#1

Iteration 2
LexicalEnv#2
└── i = 2

Callback closes over LexicalEnv#2

Iteration 3
LexicalEnv#3
└── i = 3

Callback closes over LexicalEnv#3

Later (after 1 second)

Each callback executes and reads its own environment.

That’s why output is:

1
2
3


PART 7 — What EXACTLY gets created each iteration

1)Each iteration creates:
2)A new lexical environment
New bindings for:
i
Any let / const declared in loop head
3)The new environment is:
Initialized with previous iteration’s values
Then updated via i++ (afterthought)
This is why:
Values persist correctly
Closures remember the correct i
*/
