function sum(a) {
    const x = Object.keys(a).map(function (k)  {
        const elem = a[k];
        if (typeof elem === undefined) return 2021;
        if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
        if (elem.cvalue.isBigObject !== undefined) return sum(elem);
        return elem.сvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.lenght; i++) {
        sum += x[i].cvalue;
    }
    return sum;
}
sum(5);