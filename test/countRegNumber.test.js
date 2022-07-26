import assert from "assert"
import countRegNumber from "../countRegNumber.js"

describe("The countRegNumber function" , function(){
    it("should return 3 total number of regNums, if it has regcode in the registation" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134 , CK 124'), 3);   
    })
    it("should return 2 total number of regNums, if it has regcode in the registration" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134'), 2);   
    })

    it("should return 2 total number of regNums, if it has regcode in the registration" , function(){
        assert.equal(countRegNumber('CA2 , CT34'), 2);   
    })
    it("should return 1 total number of regNums, if it has regcode in the registration" , function(){
        assert.equal(countRegNumber('CA111'), 1);   
    })

});