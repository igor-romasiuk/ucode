let idiom = +prompt('What kind of Number?','1'), str = '';

switch (idiom) {
    default: idiom = prompt('What kind of Number?') 
    case 1:
        str = 'Back to square 1';
        break;
    case 2:
        str = 'Goody 2-shoes';
        break;
    case 3:
    case 6:    
        str = 'Two\'s company, three\'s a crowd';
        break; 
    case 4:
    case 9:    
        str = 'Counting sheep';
        break;     
    case 5:
        str = 'Take ﬁve';
        break; 
    case 7:
        str = 'Seventh heaven';
        break;     
    case 8:
        str = 'Behind the eight-ball';
        break;    
    case 10:
        str = 'Cheaper by the dozen';  
        break;
        
}
alert(str);