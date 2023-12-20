class InvalidDateFormatError extends RangeError{}
class DateIsInTheFutureError extends RangeError{}

function ask(){
  return prompt ("when is your birthday")
}

function isVaild(date:Date){
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
}

function parse (birthday:string):Date|null{
  try { 
    let date = new Date(birthday)

    if(!isVaild(date)){
      throw new InvalidDateFormatError ('Enter a date in the form YYYY/mm/dd' )
    }
    if(date.getTime() > Date.now()){
      throw new DateIsInTheFutureError ('Are you a timelord')
    }
    return date
  } 
  catch(e:any) {
    if ( e instanceof RangeError ){
      console.error(e.message)
    } else {
      throw e 
    }
    return null 
  }
}

let useInput = ask()
console.log(useInput && parse(useInput))  
