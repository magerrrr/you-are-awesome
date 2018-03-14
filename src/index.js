const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, ({
        enumerable: false,
        get: function () {
            return value;
        },
        set: function (newVal) {
            value = newVal;
        }
    }));
    return propertyName
};

const createProtoMagicObject = () => {
    var a = function () {
        return {};
    };
    a.prototype = a.__proto__;
    return a;
};

const incrementor = (() => {
    var _value = 0;

    function _incrementor() {
        _value++;
        return _incrementor;
    };

    _incrementor.valueOf = function () {
        return _value
    };

    return _incrementor;
})();

const asyncIncrementor = () => {
    if (typeof this.asyncIncr == 'undefined') {
        this.asyncIncr = 1;
    } else {
        this.asyncIncr++;
    }
    var value = this.asyncIncr;

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 10);
    });
};


const createIncrementer = () => {
    var value = 0;
    return {
        next() {
            return {
                value: ++value,
                done: false
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    }
};

const returnBackInSecond = (argument) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(argument);
        }, 1000);
    });
};
const getDeepPropertiesCount = (obj) => {};

const createSerializedObject = () => {
    let sObj = {
        key: "value"
    };
    Object.defineProperty(sObj, "toJSON", {
        value: function () {
            return sObj.toString();
        }
    });
    return sObj;
};
const toBuffer = () => {};

const sortByProto = (srcArr) => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;