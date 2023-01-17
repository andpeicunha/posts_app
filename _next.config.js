require("dotenv").config

const nextConfig = {
    env:{
        MONGODB_URI: process.env.MONGODB_URI
    }
}

module.exports = nextConfig;