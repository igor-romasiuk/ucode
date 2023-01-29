'use strict';

let num = +prompt('What kind of Number?','1');

switch (num) { 
/* eslint-disable indent */
    case 1:
        alert('Back to square 1');
        break;
    case 2:
        alert('Goody 2-shoes');
        break;
    case 3:
    case 6:    
        alert('Two\'s company, three\'s a crowd');
        break; 
    case 4:
    case 9:    
        alert('Counting sheep');
        break;     
    case 5:
        alert('Take ﬁve');
        break; 
    case 7:
        alert('Seventh heaven');
        break;     
    case 8:
        alert('Behind the eight-ball');
        break;    
    case 10:
        alert('Cheaper by the dozen');  
        break;
    default:
        switch (+prompt('What kind of Number?')) { 
            case 1:
                alert('Back to square 1');
                break;
            case 2:
                alert('Goody 2-shoes');
                break;
            case 3:
            case 6:    
                alert('Two\'s company, three\'s a crowd');
                break; 
            case 4:
            case 9:    
                alert('Counting sheep');
                break;     
            case 5:
                alert('Take ﬁve');
                break; 
            case 7:
                alert('Seventh heaven');
                break;     
            case 8:
                alert('Behind the eight-ball');
                break;    
            case 10:
                alert('Cheaper by the dozen');  
                break;
            default:
                alert('Your number wrong');  
        }
}