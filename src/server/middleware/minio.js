import {Client} from 'minio'

const minioClient = new Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
})

export default defineEventHandler((event) => {
    event.context.minio = minioClient
    // minioClient.putObject("name", file.name, file.buffer)
})