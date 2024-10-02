var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student1 = {
    id: 1,
    name: "John Doe",
    address: "Hn"
};
// let v_id = student.id;
// let v_name = student.name;
// let v_address = student.address;
//Detructuring
var v_id = student1.id, v_name = student1.name, v_address = student1.address;
//Array
console.log("ID: ".concat(v_id));
console.log("Name: ".concat(v_name));
console.log("Address: ".concat(v_address));
var Railway85 = ["Trang", "Đức", "Nam"];
var v_name1 = Railway85[0], v_name2 = Railway85[1], v_name3 = Railway85[2];
console.log("Railway[0]: ".concat(v_name1));
console.log("Railway[1]: ".concat(v_name2));
console.log("Railway[2]: ".concat(v_name3));
var student2 = __assign(__assign({}, student1), { gender: true, class: "Railway85" });
var Railway85_Update = __spreadArray(__spreadArray([], Railway85, true), ["A", "B"], false);
var v_name4 = Railway85_Update[0], v_name5 = Railway85_Update[1];
console.log("Railway_Update[3]: ".concat(v_name4));
console.log("Railway_Update[4]: ".concat(v_name5));
