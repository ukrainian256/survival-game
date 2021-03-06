'use strict';


var smartAi = function* (cell) {

    while (true) {
        var attackedLa

        var cellInFront = cell.scan();

        if (cellInFront)  {

            if(cell.id !== cellInFront)
            {

                yield cell.attack();

            } else { 

                yield cell.turnLeft();

            }

        } 

        
        if (cell.energy > 10) {

            yield cell.reproduce();

        }


        yield cell.photosynthesis();
        yield cell.move();



    }

};


module.exports = smartAi;
