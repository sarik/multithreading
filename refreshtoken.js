/* 
async function deleteOlderTokens(){

    let query = "delete from refresh_tokens where current_time - created_at > 30 "

    await dbLibrary.getConnection().run()


} */

setInterval(() => {
    console.log("udating values")
}, 1000)

