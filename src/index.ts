import {createServer } from 'node:http'
import { createApplication} from './app'
async function main ()
{
    try {

        const server = createServer(createApplication())
        const PORT: number = 8080

        server.listen(PORT , () => {
            console.log(`http server is running on port ${PORT}`);
            
        })
        
    } catch (error) {
        console.log("ERROR IN STARTING ");
        
        
    }

}

main();