let student1 = {
    id: 1,
    name: "John Doe",
    address: "Hn"
}

// let v_id = student.id;
// let v_name = student.name;
// let v_address = student.address;

//Detructuring
let { id: v_id, name: v_name, address: v_address } = student1

//Array

console.log(`ID: ${v_id}`);
console.log(`Name: ${v_name}`);
console.log(`Address: ${v_address}`);

let Railway85 = ["Trang", "Đức", "Nam"]
let [v_name1, v_name2, v_name3,] = Railway85;

console.log(`Railway[0]: ${v_name1}`);
console.log(`Railway[1]: ${v_name2}`);
console.log(`Railway[2]: ${v_name3}`);

let student2 = {
    ...student1,
    gender: true,
    class: "Railway85",
}
let Railway85_Update = [...Railway85, "A", "B"]
let [v_name4, v_name5] = Railway85_Update;
console.log(`Railway_Update[3]: ${v_name4}`);
console.log(`Railway_Update[4]: ${v_name5}`);

