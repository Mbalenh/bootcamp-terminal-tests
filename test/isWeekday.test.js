import assert from "assert"
import isWeekday from "../isWeekday.js"

describe("The isWeekday function" , function(){
    it("should return true , if the the day is on the week and it Monday" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it("should return false. if the day is on the weekend which is 'Saturday'" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it("return false. if the day is on the weekend which is 'Sunday'" , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it("hould return true , if the the day is on the week which is Thursday" , function(){
        assert.equal(isWeekday('Thursday'), true);

    });

})
