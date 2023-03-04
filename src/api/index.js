import chance from "chance";
const chances = chance();
export const fakedata = () => {
    // console.log(chances.name({ middle: true }));
    return chances.name({ middle: true });

}
//  fakedata();