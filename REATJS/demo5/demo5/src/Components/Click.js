import React, { useEffect, useState } from "react";

function Click(props) {
    // khai báo State count1 để lưu trữ số lần ấn vào nút Click 1
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    let handClick1 = () => {
        setCount1(count1 + 1);
    };
    let handClick2 = () => {
        setCount2(count2 + 1);
    };
    // Khai báo useEffect
    useEffect(() => {
        console.log("Đoạn code 1 được gọi !!");
    }, [count1, count2]);
    useEffect(() => {
        console.log("Đoạn code 2 được gọi !!");
    }, [count2]);
    useEffect(() => {
        console.log("Đoạn code 3 được gọi !!");
    }, []);
    useEffect(() => {
        // Logic 
        return () => {
            console.log("Đoạn code 4 được gọi !!");
        }
    });

    return (
        <>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" class="btn btn-info" onClick={handClick1}>
                        Click1
                    </button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h3>Bạn đã ấn {count1} số lần vào nút click 1</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" class="btn btn-primary" onClick={handClick2}>
                        Click2
                    </button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h3>Bạn đã ấn {count2} số lần vào nút click 2</h3>
                </div>
            </div>
        </>
    );
}

export default Click;
