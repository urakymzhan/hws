
# This is what expected from students.
## The idea is to use as much JavaScript methods as possible but project should also make sense.

1. Get the me the height and weight of Pokemon and return them in String format
   <!-- toString() -->


2. Store the result of 1 and again convert height and weight to integer. Then calculate Pokemons BMI. Assume the weight and height are in in kg and meters consequently.
     <!-- parseInt(), BMI = kg/m2  or  (703 x lbs)/[in]^2 -->


3. Store the name of Pokemon to new variable. Then using new varibale calculate the length (word count) of Pokemon name and make it an upper case.
     <!-- data.name.length, data.name -->


4. Make sure name contains word "bulba" 
     <!-- data.name.includes("bulba") or new variable.includes("bulba") -->


5. Now cut first 2 characters of name and store as a new variable. Also get last 2 charaters of name and store as a new variable. At the end add this 2 variables and return a new name that consists of first 2 and last 2 characters of original name.
<!--         var name = data.name;
        console.log(name);
        var start = name.substring(0,2);
        var end = name.substring(name.length-2, name.length)
        var result = start.concat(end); "" they can simply add but use concat()
        console.log(result); -->


6. Now store new name variable into an array. And console to the result.
  <!--    var arr = name.split();
     console.log(arr); -->


7. Console log the names of each "type" that is inside types array in original data. Make sure you see "poison" and "grass" as a result.
<!--      for(var i = 0; i < data.types.length; i++) {
          console.log(data.types[i].type.name);
     }
    better use forEach();
     data.types.forEach(function(item){
        console.log(item.type.name);
     }) -->

8. Make sure/check abilites is an array type. Abilites can be found from same data object.
    <!-- console.log(Array.isArray(data.abilities)); -->


9. From abilities array get the last ability(object) and console the name of it.

<!--      var lastAbility = data.abilities.pop();
     console.log(lastAbility.ability.name);  -->  


10. Now take that last ability (object) and again put it back to abilities array.
     <!-- data.abilities.push(lastAbility); -->


11. Loop throgh the stats data and console the base_stat values. 
    <!-- data.stats.map(function(data) {
        console.log(data.base_stat);
     }) -->

12. Store Step 11 values into new array and filter and console the values that above 47.
    
<!--     var arrData = data.stats.map(function(data) {
        return data.base_stat;
    })
    then filter:
    var filteredData = arrData.filter(function(data) {
        return data > 47;
    }) -->

13. Reverse an array that contained base_stat values and return a string combining all these values.
<!--     var resultString = arrData.reverse().join();
    console.log(typeof res);
    console.log(res); -->


14. From base_stat values array return/shallow copy only 2 first values as an array.

<!--     var slicedArr = arrData.slice(0,2);
    console.log(slicedArr) -->

15.  From base_stat values array replace first number with your name. Modify the original array.

    <!-- arrData.splice(0,1, "Ulan");
    console.log(arrData); -->


16. From data show avatar, name, height and weight on the DOM.

<!--     var avatar = document.querySelector("#pokemon-avatar");
    var Pname = document.querySelector("#pokemon-name");
    var info = document.querySelector("#info");

    Pname.innerHTML = data.name;
    avatar.src = data.sprites.front_default;
    info.innerHTML = `Height: ${data.height} - Weight: ${data.weight}` -->

17. Console log keys and values of data object. Return can be an array or a string.
<!--     var keys = Object.keys(data);
    keys.map(function(key) {
        console.log(key);
    })

    var values = Object.values(data);
    values.map(function(value) {
        console.log(value);
    })

    for (var property in data) {
        console.log(property + " : " + data[property]);
    } -->








