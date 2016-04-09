
var config = {
	db: 'mongodb://127.0.0.1:27017/api',
	port:8080,
    apiConfig: {
        controller: [
            "goods",
            "storage",
            "goods_brand"
        ],
        ips: [
            "*.*.*.*"
        ],
        version: [
            "v1"
        ],
        errorCodes:{
            97: "error, check your access token",
            98: "error, check your url address",
            99: "not found action method",
            100: "unknown controller",
            101: "not found resource",
            102: "id cant's null or empty",
            103: "get by id not found",
            104: "id can't great than 15",
            105: "get list is error",
            106: "page must be great than zero",
            107: "rows must be great than zero",
            108: "forumId and title must be not null",
            109: "create faild",
            110: "data error",
            111: "remove error"
        },
        //accessToken:"86167744-d68d-4215-8494-745a88d68549",
        accessToken:"abc",
    }
};

module.exports = config;

