import BuildHTML from './Funcs/BuildHTML.js';
import addtoCartProductPages from './Funcs/addtoCartProductPages.js';
import addtoCartAllOtherPages from './Funcs/addtoCartAllOtherPages.js';
import GetValuesRec from './Funcs/GetValuesRec.js';
import GetLocalStorageItems from './Funcs/GetLocalStorageItems.js';
import RemoveItems from './Funcs/RemoveItems.js';
import SetConditions from './Funcs/MouseLeave.js';

//This function is used to add and remove items to basket and recommendation sections
const PrepareOverlay = () => { 

    BuildHTML();
    GetLocalStorageItems();
    GetValuesRec();

    if(window.location.href.includes('produkte')){
        addtoCartProductPages();
    } else if(window.location.href.includes('warenkorb')){
        RemoveItems();
    } else {
        addtoCartAllOtherPages();
    } 
    //Hide Overlay until it gets triggered by MouseLeave Func
    document.querySelector('#Parent').style.display = 'none';

    //Launch Overlay when basket >= 1 and durtions since last shown >= 10 seconds
    SetConditions();
}

PrepareOverlay();

