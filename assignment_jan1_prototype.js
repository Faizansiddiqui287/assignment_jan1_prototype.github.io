Array.prototype.prime = function() 
{
    for(let i=0; i<this.length; i++)
    {
       if(this[i]<=1)
       {
           return false
       }
       else
       {
       for (let i = 2; i < this[i] / 2; i++) 
           {
           if (this[i] % i == 0) 
              {
               return false
              }
            }
            return true
        }
    }
}

const arr1 = [9, 10, 11, 12]
document.write(arr1.prime())

document.write("<br/>")

const arr = [3, 4, 5, 6]
document.write(arr.prime())


