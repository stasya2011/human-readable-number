module.exports = function toReadable (number) {
    let numberToStr = String(number)

    let arrOne = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let arrTwo = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let arrThree = ["ten", "eleven", "twelve", "thirteen","fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    

    if (numberToStr.length == 1) {
        return arrOne[number]

    } else if (numberToStr.length == 2) {
        if (numberToStr[1] == 0) {
            return arrTwo[numberToStr[0] - 1]
        } else if(numberToStr[0] == 1){
            return `${arrThree[numberToStr[1]]}`
        }
        else {
            return `${arrTwo[numberToStr[0]-1]} ${arrOne[numberToStr[1]]}`
        }

    } else if (numberToStr.length == 3) {
        if (numberToStr[1] == 0 && numberToStr[2] == 0) {
            return `${arrOne[numberToStr[0]]} hundred`;

        } else if (numberToStr[1] != 0 && numberToStr[1] != 1 && numberToStr[2] == 0) {
            
            return `${arrOne[numberToStr[0]]} hundred ${arrTwo[numberToStr[1]-1]}`;

        } else if (numberToStr[1] == 1 && numberToStr[2] != 0) {
            switch (numberToStr[2]) {
                case "1":
                    return `${arrOne[numberToStr[0]]} hundred eleven`;
                    break;
                case "2":
                    return `${arrOne[numberToStr[0]]} hundred twelve`;
                    break;
                case "3":
                    return `${arrOne[numberToStr[0]]} hundred thirteen`;
                    break;
                    case "5":
                    return `${arrOne[numberToStr[0]]} hundred fifteen`;
                    break;
                    case "8":
                    return `${arrOne[numberToStr[0]]} hundred eighteen`;
                    break;
                default:
                    return `${arrOne[numberToStr[0]]} hundred ${arrOne[numberToStr[2]]}teen`;
            
        }

    } else if(numberToStr[1] == 1 && numberToStr[2] == 0){
        return `${arrOne[numberToStr[0]]} hundred ${arrTwo[0]}`;
    }
    else if(numberToStr[1] == 0){
        return `${arrOne[numberToStr[0]]} hundred ${arrOne[numberToStr[2]]}`;
    }else{
        return `${arrOne[numberToStr[0]]} hundred ${arrTwo[numberToStr[1]-1]} ${arrOne[numberToStr[2]]}`;
    }

}
}
