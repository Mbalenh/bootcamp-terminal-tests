import assert from "assert"
import mostProfitableDepartment from "../mostProfitableDepartment.js"


describe("The mostProfitableDepartment function" , function(){
    it("should  be  able to check which department has the most  profitable in SalesData1", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
    it("should  be  able to check which department has the most  profitable in SalesData2", function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
    it("should  be  able to check which department has the most  profitable in SalesData3", function(){
        assert.equal('carpentry', mostProfitableDepartment(salesData3), "Most profitable department is 'carpentry' for dataset 3");
    });
    it("should  be  able to check which department has the most  profitable in SalesData4", function(){
        assert.equal('youtube', mostProfitableDepartment(salesData4), "Most profitable department is 'youtube' for dataset 4");
    });

    });
    