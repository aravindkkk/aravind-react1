import {sum} from "../Components/sum"

test("Sum Function calculate sum of 2 numbers", () => {

    const result = sum(3,2);

    expect(result).toBe(5)

});
