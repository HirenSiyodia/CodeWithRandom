async function FetchData(){
    try{
        let res = await fetch("https://api.github.com/users/Aestheticsuraj234");
        let data = await res.json();
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
    finally {
        console.log("this is running")
    }
}

FetchData()