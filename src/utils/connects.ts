import mongoose from "mongoose";
import config from "config";

 async function connect() {
    const dbUrl = config.get<string>("dbUrl");
    mongoose.connect(dbUrl);

    try {
        console.log("db 연결 성공")
        await mongoose.connect(dbUrl);
    } catch (error) {
        console.error("db 연결 실패");
        process.exit(1); // 왜 이렇게 사용하는거지?
    }
}

export default connect;

