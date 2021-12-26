const urlJoin = require("url-join");
const request = require("request-promise-native").defaults({json: true});

class ProfesoresResource
{
    static profesoresUrl(recourceUrl)
    {
        const profesoresServer = (process.env.PROFESORES_URL || "http://localhost:3000/api/v1");
        return urlJoin(profesoresServer, recourceUrl);
    }

    static requestHeaders()
    {
        const profesoresKey = (process.env.PROFESORES_APIKEY || "6382535d-52dc-4cd5-ab8b-425c9da7727e");
        return {
            apikey: profesoresKey
        };
    }

    static getAllProfesores()
    {
        const url = ProfesoresResource.profesoresUrl("/profesores");
        const options = {
            headers: ProfesoresResource.requestHeaders()
        };

        return request.get(url, options);
    }
}

module.exports = ProfesoresResource;