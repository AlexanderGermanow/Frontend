const func01 = async () => {
    console.log('');
    const fetchRes = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(fetchRes);

    // fetchRes.then((resultOfPromiseLogic) => console.log(resultOfPromiseLogic));
    // console.log(fetchRes);
    return 777;
}

func01();
// const resultOfFunc01 = func01();
// console.log(resultOfFunc01);
 console.log('');
