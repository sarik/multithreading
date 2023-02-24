const axios = require("axios");

let url = "http://localhost:3001/ax";

async function main() {
    const config = {
        method: "POST",
        url,
        data: { name: "name" },
        timeout: 260000,
        validateStatus(status) {
            return status < 600
        }
    }

    const res = await axios(config)
    if(!res.data){
        console.log("no data")
    }
    console.log(res.status)
    console.log(res.status === 204)
    if(!res.data){
        console.log("no data")
    }

}

main()
