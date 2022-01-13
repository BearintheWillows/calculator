
const calculator = {

    operator: (...args) => {
        const ops = ['+', '-', '*', '/', '=', '(', ')']
        let numbers = []
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            
            console.log(element)
            if (ops.includes(element)) {
            findOperator(element)
            console.log(element)
            } else {
                numbers.push(element)
                console.log(numbers)
            }
        };

    },

    findOperator(operator) {
        switch (operator) {
            case '+':
                console.log('add')
                break;
        
            default:
                break;
        }
    },

    add: (...args) => {
        let value = args[0]
        for (let index = 1; index < args.length; index++) {
            value = value + args[index]
        }
        return value
    },

    subtract: (...args) => {
        let value = args[0]
        for (let index = 1; index < args.length; index++) {
                value = value - args[index]
            }
        
            return value
    },

    multiply: (...args) => {
        let value = [args[0]]
        for (let index = 1; index < args.length; index++) {
            value = value * args[index]
         }

         return value
    },

    divide: (...args) => {
        let value = args[0]
        for (let index = 1; index < args.length; index++) {
            value = value / args[index]
        }

        return value
    }
}


console.log(calculator.operator('2,+, 2'))