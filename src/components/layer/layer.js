import tpl from  './layer.html';
import css from  './layer.css';

function layer() {
	console.log(css);
    return {
    	name:'layer',
		tpl:tpl
	}
};
export default layer