function createCounter(min,max){  //creates private variable count;which is not accessible outside directly and it is called closure
    let count=0;

    return{
        increment:function(){
            if(count<max){
                count++;
                return{value:count,message:""};
            }
            else{
                return{value:count,message:"Maximum limit reached!"};
            }
        },
        decrement:function(){
            if(count>min){
                count--;
                return{value:count,message:""};
            }
            else{
                return{value:count,message:"Minimum limit reached"};
            }
        },
        getValue:function(){
            return count;
        }
    }
}

//min=0; max=10;
const counter = createCounter(0, 10);
//connects js with html elements
const countDisplay = document.getElementById("count");
const messageDisplay = document.getElementById("message");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

//this fun updates no. on screen
function render(res) {
  countDisplay.textContent = res.value;
  messageDisplay.textContent = res.message;
}

function handleIncrement() {
  const result = counter.increment();
  render(result);
}

function handleDecrement() {
  const result = counter.decrement();
  render(result);
}

incBtn.addEventListener("click", handleIncrement);
decBtn.addEventListener("click", handleDecrement);

render({ value: counter.getValue(), message: "" });