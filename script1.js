let Num = 0;
switch (Num % 2) {
    case 1:
        alert('its odd')
        break;
        case 0:
        switch (Num) {
            case 0:
                alert('its zero')
                break;
        
            default:
                alert('its even')
                break;
        }
        break;
    default:
        alert('its shit')
        break;
}