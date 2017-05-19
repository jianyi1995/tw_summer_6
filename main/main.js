const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    var inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
    let size = loadAllItems().length
    var count = new Array(size)
    let tmp = inputs[0].length
    let number = 0
    // 初始化商品数量
    for (let i = 0; i < size; i++)
    	count[i] = 0
    for (var i of inputs){
    	number = parseInt(i[tmp - 1])
    	count[number] = count[number] + 1
    }
    let total = 0
    let str = '***<没钱赚商店>购物清单***\n'
    for (let i = 0; i < size; i++)
    {
    	if(count[i] != 0){
    		let item = loadAllItems()[i]
    		str += '名称：' + item.name + '，'
    		str += '数量：' + String(count[i]) + item.unit + '，'
    		str += '单价：' + String(item.price.toFixed(2)) + '(元)，'
    		str += '小计：' + String((item.price * count[i]).toFixed(2)) + '(元)\n'
    		total += item.price * count[i]
     	}
    }
    str += '----------------------\n'
    str += '总计：' + String(total.toFixed(2)) + '(元)\n'
    str += '**********************'
    console.log(str)
    return str
};
