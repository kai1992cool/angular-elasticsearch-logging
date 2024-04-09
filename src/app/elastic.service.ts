import { Injectable } from "@angular/core";
import * as ElasticAppSearch from "@elastic/app-search-javascript";

@Injectable({
    providedIn: 'root'
})
export class ElasticService {
    private client: any;
    elasticSearchUrl = 'url';
    elasticAPIKeyId = 'key-id';
    elasticKey = 'key';
    indexName = 'search-index';
    constructor() {
        this.client = ElasticAppSearch.createClient({
            searchKey: "search-mu75psc5egt9ppzuycnc2mc3",
            endpointBase: "http://127.0.0.1:3002",
            engineName: "favorite-videos"
          });
    }

    async logToElasticSearch( message: string, level: string = 'info') { 
        try {
            const response = await this.client.index({
                index: this.indexName,
                body: {
                    timestamp: new Date().toISOString(),
                    message: message,
                    level: level
                }
            });
            console.log('Log successfully sent to Elastic search: ', response);
        } catch (error) {
            console.error('Error sending log to Elasticsearch: ', error);
        }
    }
}
