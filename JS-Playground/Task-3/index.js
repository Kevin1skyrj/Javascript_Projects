/**  Qn
 You are developing a simple calorie tracking application and need to implement a function to calculate the total calories burned during a workout session. Implement a JavaScript function named calculateCaloriesBurned that takes an array parameter activities, where each element represents the calories burned for a specific activity.

Your task is to implement the calculateCaloriesBurned function to calculate the total calories burned during the workout session based on the provided activities. 
*/

function calculateCaloriesBurned(activities){
    let sum = 0;
    for(let i = 0; i < activities.length; i++){
        sum = sum + activities[i];
    }
    return sum;

}
console.log(calculateCaloriesBurned([100, 150, 200]));
